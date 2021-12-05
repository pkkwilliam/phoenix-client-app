<template>
  <view>
    <view
      class="payment-channel-container"
      v-for="(paymentChannel, index) in paymentChannels"
      :key="index"
      @click="onClickPaymentMethod(paymentChannel, index)"
    >
      <payment :payment="paymentChannel" />
      <u-icon name="checkmark" v-if="selectedPaymentIndex === index" />
    </view>
  </view>
</template>

<script>
import { M_PAY, ALIPAY, WECHAT_PAY } from "../../enum/paymentChannel";
import UIcon from "../../uview-ui/components/u-icon/u-icon.vue";
import { setOrderConfirmPaymentChannel } from "../order/orderConfirmAppStateHelper";
import payment from "./payment.vue";
const PAYMENT_CHANNELS = [M_PAY, ALIPAY, WECHAT_PAY];
export default {
  components: { payment, UIcon },
  computed: {
    paymentChannels() {
      return PAYMENT_CHANNELS;
    },
  },
  data() {
    return { selectedPaymentIndex: -1 };
  },
  methods: {
    onClickPaymentMethod(paymentChannel, index) {
      setOrderConfirmPaymentChannel(this.$store, paymentChannel);
      this.selectedPaymentIndex = index;
      this.onSelect(paymentChannel);
    },
  },
  props: {
    onSelect: {
      default: () => {},
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-channel-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35rpx;
  margin-top: 35rpx;
}
</style>