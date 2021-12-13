<template>
  <view class="row-center-container" @click="onClickAddress">
    <view class="align-end-container" v-if="address">
      <text class="h4 black bold">{{
        `${address.contactName} ${address.phoneNumber}`
      }}</text>
      <text class="h4 secondary">{{ `${address.street}${address.unit}` }}</text>
    </view>
    <view v-else>
      <text class="secondary">新增地址</text>
    </view>
    <u-icon class="arrow-right" name="arrow-right" color="#a3a3a3" :size="26" />
  </view>
</template>

<script>
import { ADDRESS_SELECTION_PAGE } from "../../route/applicationRoute";
export default {
  computed: {},
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
  },
};
</script>

<style lang="scss" scoped>
.arrow-right {
  margin-left: 8rpx;
}
</style>