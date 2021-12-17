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
          <primary-gradient-button label="我想要" @click="onClickBuy" />
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
  getRouterJsonParam,
  LOGIN_PAGE,
  PRE_ORDER_PAGE,
} from "../route/applicationRoute";
import { GET_ITEM } from "../service/service";
import UserCard from "../common/user/userCard.vue";
import UserSubscribeButton from "../components/subscribe/UserSubscribeButton.vue";
import SaveItemButton from "../components/item/saveItemButton.vue";
import StickBottomBar from "../common/navigation/stickBottomBar.vue";
import PrimaryGradientButton from "../common/button/primaryGradientButton.vue";
export default {
  components: {
    itemDetail,
    SellerCard,
    SellerCardRecetInfo,
    UserCard,
    UserSubscribeButton,
    SaveItemButton,
    StickBottomBar,
    PrimaryGradientButton,
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
    onClickBuy() {
      if (!this.isLogin()) {
        uni.navigateTo({ url: LOGIN_PAGE().url });
      } else {
        uni.navigateTo({ url: PRE_ORDER_PAGE(this.item).url });
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
.container {
  padding-bottom: 100rpx;
}
</style>