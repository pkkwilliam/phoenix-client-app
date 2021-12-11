<template>
  <view class="container">
    <view
      class="address-container"
      v-for="(address, index) in addresses"
      :key="index"
    >
      <view class="info-container" @click="onClickAddress(address)">
        <text class="receiver-text">{{
          `${address.contactName} ${address.phoneNumber}`
        }}</text>
        <text class="receiver-address-text">{{
          `${address.street} ${address.unit}`
        }}</text>
      </view>
      <u-icon
        class="arrow-right"
        name="arrow-right"
        color="#a3a3a3"
        :size="26"
        @click="onClickRightIcon(address)"
      />
    </view>
    <primary-button label="創建地址" @click="onClickCreateAddress" />
  </view>
</template>

<script>
import { setOrderConfirmAddress } from "../common/pre-order/preOrderConfirmAppStateHelper";
import primaryButton from "../common/primaryButton.vue";
import { ADDRESS_FORM_PAGE } from "../route/applicationRoute";
export default {
  components: { primaryButton },
  computed: {
    addresses() {
      return this.$store.state.address.content;
    },
  },
  methods: {
    onClickAddress(address) {
      setOrderConfirmAddress(this.$store, address);
      uni.navigateBack();
    },
    onClickCreateAddress() {
      uni.navigateTo({ url: ADDRESS_FORM_PAGE().url });
    },
    onClickRightIcon(address) {
      uni.navigateTo({ url: ADDRESS_FORM_PAGE(address).url });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
.address-container {
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20rpx;
  padding: 35rpx;
}
.info-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  .receiver-text {
    color: $u-phoenix-font-dark;
    font-size: 32rpx;
    font-weight: 600;
  }
  .receiver-address-text {
    color: $u-phoenix-light-grey;
    font-size: 28rpx;
    margin-top: 15rpx;
  }
}
</style>