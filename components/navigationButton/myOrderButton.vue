<template>
  <view class="column-center-container" @click="onClick">
    <u-icon
      class="icon-container"
      custom-prefix="phoenix-custom-icon"
      name="bag"
      size="38"
      :top="-1"
    />
    <view class="small-margin-top-spacer">
      <text class="h4 secondary">{{ text }}</text>
    </view>
  </view>
</template>

<script>
import { MY_ORDER_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    text() {
      const { content } = this.$store.state.buyerPendingOrder;
      return `我買到的 ${content.length}`;
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_ORDER_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  background-color: $u-phoenix-yellow;
  border-radius: 100px;
  color: #ffffff;
  padding: 12rpx;
}
</style>