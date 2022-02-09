<template>
  <view class="sticky-bottom-container-padding">
    <view class="container">
      <view class="card medium-margin-top-spacer">
        <user-card-mini :user="item.createBy" />
        <sold-item class="medium-margin-top-spacer" :item="item" />
      </view>
      <view class="card medium-margin-top-spacer">
        <text class="h3 black bold">選擇想要交換的物品</text>
        <application-line-breaker />
        <pagination-item-display
          ref="paginationItemDisplayRef"
          :serviceRequest="getCreatedItemServiceRequest"
        >
          <template v-slot:content="{ data }">
            <view
              class="row-center-container medium-margin-top-spacer"
              @click="toggleOfferItems(data)"
            >
              <selectable-check :selected="offerItemContainItem(data)" />
              <sold-item
                class="medium-margin-left-spacer full-width"
                :clickable="false"
                :item="data"
              />
            </view>
          </template>
        </pagination-item-display>
      </view>
    </view>
    <view class="cu-bar foot container">
      <view class="flex-end-center-container summary-container full-width q">
        <text class="h3 white bold"
          >{{ `已選${offerItems.length}件物品 價差` }}
        </text>
        <display-currency-fish-coin
          class="medium-margin-right-spacer"
          :value="valueDifference"
        />
        <view>
          <primary-button
            :disabled="submitButtonDisable"
            @onClick="createBarterRequest"
          >
            換物
          </primary-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getBarterRequestPriceDifference } from "../../common/barterRequest/barterRequestUtil";
import PrimaryButton from "../../common/button/primaryButton.vue";
import DisplayCurrencyFishCoin from "../../common/displayCurrency/displayCurrencyFishCoin.vue";
import SoldItem from "../../common/item/soldItem.vue";
import PaginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import SelectableCheck from "../../common/selectableCheck.vue";
import UserCardMini from "../../common/user/userCardMini.vue";
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import {
  BARTER_REQUEST_DETAIL_PAGE,
  getRouterJsonParam,
} from "../../route/applicationRoute";
import {
  CREATE_BARTER_REQUEST,
  GET_CREATED_ITEMS,
  GET_ITEM,
} from "../../service/service";
export default {
  components: {
    SoldItem,
    PaginationItemDisplay,
    UserCardMini,
    ApplicationLineBreaker,
    SelectableCheck,
    DisplayCurrencyFishCoin,
    PrimaryButton,
  },
  computed: {
    submitButtonDisable() {
      return this.offerItems.length < 1;
    },
    valueDifference() {
      return getBarterRequestPriceDifference({
        requestItem: this.item,
        offerItems: this.offerItems,
      });
    },
  },
  data() {
    return {
      item: undefined,
      offerItems: [],
    };
  },
  methods: {
    async createBarterRequest() {
      const requestBody = {
        requestItem: this.item,
        offerItems: this.offerItems,
      };
      this.execute(CREATE_BARTER_REQUEST(requestBody)).then((barterRequest) => {
        this.$appStateService.getStatusSummary({ force: true });
        console.log(JSON.stringify(barterRequest), "createeed");
        uni.redirectTo({
          url: BARTER_REQUEST_DETAIL_PAGE(barterRequest.id).url,
        });
      });
    },
    getCreatedItemServiceRequest(pageRequest, pageSize) {
      return GET_CREATED_ITEMS(pageRequest, pageSize);
    },
    offerItemContainItem(requestItem) {
      for (let index = 0; index < this.offerItems.length; index++) {
        if (this.offerItems[index].id === requestItem.id) {
          return true;
        }
      }
      return false;
    },
    toggleOfferItems(requestItem) {
      const offerItemsContainsItem = this.offerItemContainItem(requestItem);
      if (offerItemsContainsItem) {
        this.offerItems = this.offerItems.filter(
          (item) => item.id !== requestItem.id
        );
      } else {
        this.offerItems = this.offerItems.concat(requestItem);
      }
    },
  },
  async onLoad(options) {
    const itemId = getRouterJsonParam(options, "itemId");
    this.item = await this.execute(GET_ITEM(itemId));
    this.offerItems = [];
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0px;
}
.summary-container {
  background-color: black;
  border-radius: 30px;
  padding: 10rpx;
}
</style>