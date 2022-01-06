<template>
  <view>
    <view class="container">
      <view class="card medium-margin-top-spacer">
        <payment-selection @onSelectPaymentChannel="onSelectPaymentChannel" />
      </view>
    </view>
    <view class="cu-bar foot">
      <u-button @click="onClickSubmit">{{
        `確認支付 $${paymentAmount}`
      }}</u-button>
    </view>
  </view>
</template>

<script>
import paymentSelection from "../../common/payment/paymentSelection.vue";
import { getRouterJsonParam } from "../../route/applicationRoute";
import { REQUEST_MPAY_PAYMENT_INFO } from "../../service/service";

export default {
  components: { paymentSelection },
  computed: {
    paymentAmount() {
      return this.order.paymentAmount;
    },
  },
  data() {
    return { order: undefined, paymentChannel: undefined };
  },
  methods: {
    async onClickSubmit() {
      const mpayPaymentRequestInfo = await this.execute(
        REQUEST_MPAY_PAYMENT_INFO(this.order.id, this.paymentChannel.key)
      );
    },
    onSelectPaymentChannel(paymentChannel) {
      this.paymentChannel = paymentChannel;
    },
  },
  onLoad(options) {
    const order = getRouterJsonParam(options, "order");
    this.order = order;
  },
};
</script>