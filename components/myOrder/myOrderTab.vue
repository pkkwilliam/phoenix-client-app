<template>
  <view class="my-order-tab-container">
    <view
      class="button-container"
      v-for="(button, index) in buttons"
      :key="index"
      @click="onClick(index)"
    >
      <u-icon class="icon" :name="button.iconName" s ize="28" />
      <text>{{ button.label }}</text>
    </view>
  </view>
</template>

<script>
import { MY_ORDER_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    buttons() {
      return [
        { iconName: "home", label: "待付款" },
        { iconName: "home", label: "待發貨" },
        { iconName: "home", label: "待收貨" },
        { iconName: "home", label: "待評價" },
        { iconName: "home", label: "退款/後售" },
      ];
    },
  },
  methods: {
    // use index instead of passing enum to simplify the logic
    onClick(index) {
      uni.navigateTo({ url: MY_ORDER_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-order-tab-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.button-container {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>