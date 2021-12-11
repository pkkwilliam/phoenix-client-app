<template>
  <view class="navigation">
    <view class="left">
      <view class="item" @click="onClickSaveItem">
        <u-icon name="home" :size="40"> </u-icon>
        <view class="text u-line-1">收藏</view>
      </view>
      <!-- <view class="item">
        <u-icon name="home" :size="40" :color="$u.color['contentColor']">
        </u-icon>
        <view class="text u-line-1">店铺</view>
      </view> -->
      <!-- <view class="item car">
        <u-badge class="car-num" :count="9" type="error" :offset="[-3, -6]">
        </u-badge>
        <u-icon
          name="shopping-cart"
          :size="40"
          :color="$u.color['contentColor']"
        />
        <view class="text u-line-1">购物车</view>
      </view> -->
    </view>
    <view class="right">
      <view class="buy btn u-line-1" @click="onClickPurchase">我想要</view>
    </view>
  </view>
</template>

<script>
import { LOGIN_PAGE, PRE_ORDER_PAGE } from "../../route/applicationRoute";
import {
  CREATE_USER_SAVE_ITEM,
  DELETE_USER_SAVE_ITEM,
} from "../../service/service";
import { setOrderConfirmItem } from "../pre-order/preOrderConfirmAppStateHelper";
export default {
  data() {
    return { save: false };
  },
  methods: {
    onClickPurchase() {
      if (!this.isLogin()) {
        uni.navigateTo({ url: LOGIN_PAGE().url });
      } else {
        setOrderConfirmItem(this.$store, this.item);
        uni.navigateTo({ url: PRE_ORDER_PAGE().url });
      }
    },
    onClickSaveItem() {
      if (this.save) {
        this.execute(DELETE_USER_SAVE_ITEM({ item: this.item })).then(
          (response) => {
            this.save = true;
          }
        );
      } else {
        this.execute(CREATE_USER_SAVE_ITEM({ item: this.item })).then(
          (response) => {
            this.save = true;
          }
        );
      }
    },
    mounted() {
      this.save = this.props.save;
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  margin-top: 100rpx;
  border: solid 2rpx #f2f2f2;
  background-color: #ffffff;
  padding: 16rpx;
  width: 100%;
  .left {
    display: flex;
    font-size: 20rpx;
    .item {
      margin-right: 50rpx;
      &.car {
        text-align: center;
        position: relative;
        .car-num {
          position: absolute;
          top: -10rpx;
          right: -10rpx;
        }
      }
    }
  }
  .right {
    display: flex;
    font-size: 28rpx;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    .btn {
      line-height: 66rpx;
      padding: 0 30rpx;
      border-radius: 36rpx;
      color: #ffffff;
    }
    .cart {
      background-color: #ed3f14;
      margin-right: 30rpx;
    }
    .buy {
      background: $u-phoneix-primary-gradient;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
