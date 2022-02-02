<template>
  <view>
    <view class="sticky-bottom-container-padding">
      <view class="card">
        <view class="space-between-center-container">
          <user-card :user="item.createBy" />
        </view>
        <view
          class="column-center-center-container medium-margin-top-spacer"
          v-if="!item.active"
        >
          <text class="h4 secondary">此物品已失效，要不要看一下其他?</text>
        </view>
        <item-detail :item="item" />
      </view>
      <view class="card medium-margin-top-spacer">
        <user-card :user="item.createBy" />
      </view>
    </view>
    <view class="cu-bar foot">
      <stick-bottom-bar>
        <template slot="left">
          <save-item-button :item="item" />
        </template>
        <template slot="right">
          <view class="row-center-container">
            <view class="medium-margin-right-spacer">
              <primary-button
                label="我想要"
                :disabled="!item.active"
                @onClick="() => onClickSubmit('PURCHASE')"
              />
            </view>
            <primary-button
              label="我想換"
              :disabled="!item.active"
              @onClick="() => onClickSubmit('BARTER')"
            />
          </view>
        </template>
      </stick-bottom-bar>
    </view>
  </view>
</template>

<script>
import itemDetail from "../common/item/itemDetail.vue";
import SellerCard from "../common/sellerCard.vue";
import SellerCardRecetInfo from "../common/sellerCardRecetInfo.vue";
import {
  BARTER_PRE_ORDER_PAGE,
  CREATE_BARTER_REQUEST_PAGE,
  getRouterJsonParam,
  LOGIN_PAGE,
} from "../route/applicationRoute";
import { GET_ITEM } from "../service/service";
import UserCard from "../common/user/userCard.vue";
import UserSubscribeButton from "../components/subscribe/UserSubscribeButton.vue";
import SaveItemButton from "../components/item/saveItemButton.vue";
import StickBottomBar from "../common/navigation/stickBottomBar.vue";
import PrimaryButton from "../common/button/primaryButton.vue";

export default {
  components: {
    itemDetail,
    SellerCard,
    SellerCardRecetInfo,
    UserCard,
    UserSubscribeButton,
    SaveItemButton,
    StickBottomBar,
    PrimaryButton,
  },
  data() {
    return {
      item: undefined,
    };
  },
  methods: {
    getItem() {
      this.execute(GET_ITEM(this.item.id)).then(
        (response) => (this.item = response)
      );
    },
    onClickSubmit(purchaseType) {
      if (!this.isLogin()) {
        uni.navigateTo({ url: LOGIN_PAGE().url });
        return;
      }
      if (purchaseType === "BARTER") {
        uni.navigateTo({ url: CREATE_BARTER_REQUEST_PAGE(this.item).url });
      } else {
        uni.navigateTo({ url: BARTER_PRE_ORDER_PAGE(this.item).url });
      }
    },
  },
  onLoad(option) {
    const item = getRouterJsonParam(option, "item");
    this.item = item;
    this.getItem();
  },
};
</script>

<style lang="scss" scoped>
</style>