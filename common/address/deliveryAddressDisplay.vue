<template>
  <view class="delivery-address-display-container" @click="onClickAddress">
    <view class="receiver-container" v-if="hasAddress">
      <text class="receiver-text">{{
        `${shippingAddress.contactName} ${shippingAddress.phoneNumber}`
      }}</text>
      <text class="receiver-address-text">{{
        `${shippingAddress.street}${shippingAddress.unit}`
      }}</text>
    </view>
    <view v-else>
      <text class="add-address-text">新增地址</text>
    </view>
    <u-icon class="arrow-right" name="arrow-right" color="#a3a3a3" :size="26" />
  </view>
</template>

<script>
import { ADDRESS_SELECTION_PAGE } from "../../route/applicationRoute";
import uIcon from "../../uview-ui/components/u-icon/u-icon.vue";
export default {
  components: { uIcon },
  computed: {
    shippingAddress() {
      return this.$store.state.orderConfirm.address ?? {};
    },
    hasAddress() {
      return this.$store.state.address.content.length > 0;
    },
  },
  data() {
    return { selectedAddress: undefined };
  },
  methods: {
    onClickAddress() {
      uni.navigateTo({ url: ADDRESS_SELECTION_PAGE().url });
    },
  },
  props: {
    address: {
      default: undefined,
      type: Object,
    },
    onSelect: {
      default: () => {},
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow-right {
  margin-left: 8rpx;
}
.add-address-text {
  color: $u-phoenix-light-grey;
}
.delivery-address-display-container {
  align-items: center;
  display: flex;
}
.receiver-container {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  .receiver-address-text {
    color: $u-phoenix-light-grey;
    font-size: 28rpx;
  }
  .receiver-text {
    color: $u-phoenix-font-dark;
    font-size: 28rpx;
    font-weight: 600;
  }
}
</style>