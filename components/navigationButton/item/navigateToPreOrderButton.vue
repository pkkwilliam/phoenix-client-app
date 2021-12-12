<template>
  <view class="buy btn u-line-1" @click="onClick">我想要</view>
</template>

<script>
import { setOrderConfirmItem } from "../../../common/pre-order/preOrderConfirmAppStateHelper";
import { LOGIN_PAGE, PRE_ORDER_PAGE } from "../../../route/applicationRoute";
export default {
  methods: {
    onClick() {
      if (!this.isLogin()) {
        uni.navigateTo({ url: LOGIN_PAGE().url });
      } else {
        setOrderConfirmItem(this.$store, this.item);
        uni.navigateTo({ url: PRE_ORDER_PAGE(this.item).url });
      }
    },
  },
  props: {
    item: Object,
  },
};
</script>