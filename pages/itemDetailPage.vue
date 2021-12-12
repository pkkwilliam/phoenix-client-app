<template>
  <view class="container">
    <view class="card">
      <view class="space-between-center-container">
        <user-card :user="item.createBy" />
      </view>
      <item-detail :item="item" />
    </view>
    <view class="card medium-margin-top-spacer">
      <!-- <seller-card :user="item.createBy" /> -->
      <user-card :user="item.createBy" />
    </view>
    <view class="cu-bar foot">
      <item-submit-bar :item="item" />
    </view>
  </view>
</template>

<script>
import itemDetail from "../common/item/itemDetail.vue";
import ItemSubmitBar from "../common/item//itemSubmitBar.vue";
import SellerCard from "../common/sellerCard.vue";
import SellerCardRecetInfo from "../common/sellerCardRecetInfo.vue";
import { getRouterJsonParam } from "../route/applicationRoute";
import { GET_ITEM } from "../service/service";
import UserCard from "../common/user/userCard.vue";
import SubscribeUserButton from "../components/subscribe/subscribeUserButton.vue";
export default {
  components: {
    itemDetail,
    SellerCard,
    ItemSubmitBar,
    SellerCardRecetInfo,
    UserCard,
    SubscribeUserButton,
  },
  data() {
    return {
      item: undefined,
    };
  },
  onLoad(option) {
    const item = getRouterJsonParam(option, "item");
    // this.item = item;
    this.execute(GET_ITEM(item.id)).then((response) => (this.item = response));
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 100rpx;
}
</style>