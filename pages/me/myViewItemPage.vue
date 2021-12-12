<template>
  <view class="container">
    <pagination-item-display
      displayType="list"
      :serviceRequest="getUserSaveItem"
    >
      <template v-slot:content="{ data }">
        <view class="card medium-margin-top-spacer">
          <view class="space-between-center-container">
            <user-card-mini :user="data.item.createBy" />
            <view class="row-center-container">
              <display-curreny-price class="price" :value="data.item.price" />
              <strike-through-currency-price :value="data.item.originalPrice" />
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
import DisplayCurrenyPrice from "../../common/displayCurrenyPrice.vue";
import UserSaveItem from "../../common/item/userSaveItem.vue";
import paginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import StrikeThroughCurrencyPrice from "../../common/strikeThroughCurrencyPrice.vue";
import UserCardMini from "../../common/user/userCardMini.vue";
import { GET_USER_VIEW_ITEM } from "../../service/service";
export default {
  components: {
    paginationItemDisplay,
    UserSaveItem,
    DisplayCurrenyPrice,
    UserCardMini,
    StrikeThroughCurrencyPrice,
  },
  methods: {
    getUserSaveItem(pageRequest, pageSize) {
      return GET_USER_VIEW_ITEM(pageRequest, pageSize);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
</style>