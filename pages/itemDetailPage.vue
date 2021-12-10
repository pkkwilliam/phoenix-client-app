<template>
  <view class="container">
    <view class="top-container">
      <seller-card-recet-info :user="item.createBy" />
      <item-detail :item="item" />
    </view>
    <view class="seller-card-container">
      <seller-card :user="item.createBy" />
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
export default {
  components: { itemDetail, SellerCard, ItemSubmitBar, SellerCardRecetInfo },
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
.seller-card-container {
  padding: 20rpx;
  background-color: #ffffff;
}
.top-container {
  background-color: #ffffff;
  margin-bottom: 20rpx;
  padding: 20rpx;
}
</style>