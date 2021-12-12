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
      <stick-bottom-bar>
        <template slot="left">
          <save-item-button :item="item" />
        </template>
        <template slot="right">
          <navigate-to-pre-order-button :item="item" />
        </template>
      </stick-bottom-bar>
    </view>
  </view>
</template>

<script>
import itemDetail from "../common/item/itemDetail.vue";
import SellerCard from "../common/sellerCard.vue";
import SellerCardRecetInfo from "../common/sellerCardRecetInfo.vue";
import { getRouterJsonParam } from "../route/applicationRoute";
import { GET_ITEM } from "../service/service";
import UserCard from "../common/user/userCard.vue";
import SubscribeUserButton from "../components/subscribe/subscribeUserButton.vue";
import SaveItemButton from "../components/item/saveItemButton.vue";
import StickBottomBar from "../common/navigation/stickBottomBar.vue";
import NavigateToPreOrderButton from "../components/navigationButton/item/navigateToPreOrderButton.vue";
export default {
  components: {
    itemDetail,
    SellerCard,
    SellerCardRecetInfo,
    UserCard,
    SubscribeUserButton,
    SaveItemButton,
    StickBottomBar,
    NavigateToPreOrderButton,
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
  },
  onLoad(option) {
    const item = getRouterJsonParam(option, "item");
    this.item = item;
    this.getItem();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 100rpx;
}
</style>