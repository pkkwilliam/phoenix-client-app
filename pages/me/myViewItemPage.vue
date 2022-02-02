<template>
  <view class="container">
    <pagination-item-display
      ref="paginationItemDisplayRef"
      :serviceRequest="getUserSaveItem"
    >
      <template v-slot:content="{ data }">
        <view class="card medium-margin-top-spacer">
          <view class="space-between-center-container">
            <user-card-mini :user="data.item.createBy" />
            <view class="row-center-container">
              <display-currency-fish-coin
                class="price"
                :value="data.item.price"
              />
            </view>
          </view>
          <view class="medium-margin-top-spacer">
            <user-save-item :item="data.item" />
          </view>
        </view>
      </template>
    </pagination-item-display>
  </view>
</template>

<script>
import DisplayCurrencyFishCoin from "../../common/displayCurrency/displayCurrencyFishCoin.vue";
import UserSaveItem from "../../common/item/userSaveItem.vue";
import paginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import UserCardMini from "../../common/user/userCardMini.vue";
import { GET_USER_VIEW_ITEM } from "../../service/service";
export default {
  components: {
    paginationItemDisplay,
    UserSaveItem,
    UserCardMini,
    DisplayCurrencyFishCoin,
  },
  methods: {
    getUserSaveItem(pageRequest, pageSize) {
      return GET_USER_VIEW_ITEM(pageRequest, pageSize);
    },
  },
  mounted() {},
  onReachBottom() {
    this.$refs.paginationItemDisplayRef.getServiceResponse();
  },
};
</script>

<style lang="scss" scoped>
</style>