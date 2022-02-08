<template>
  <view
    class="column-center-container"
    @click="onClick"
    v-if="type === 'bottom-navigation'"
  >
    <u-icon
      class="green"
      custom-prefix="phoenix-custom-icon"
      name="message"
      :size="40"
    />
    <text class="text">{{ label }}</text>
  </view>
  <view
    class="row-center-container"
    @click="onClick"
    v-else-if="type === 'button'"
  >
    <u-icon custom-prefix="phoenix-custom-icon" name="message" :size="48" />
  </view>
</template>

<script>
import { CHAT_MESSAGE_PAGE } from "../../../route/applicationRoute";
export default {
  methods: {
    onClick() {
      uni.navigateTo({ url: CHAT_MESSAGE_PAGE(this.toUser.sid).url });
    },
  },
  props: {
    label: {
      default: "發消息",
      type: String,
    },
    toUser: Object,
    /**
     * bottom-navigation
     * button
     */
    type: {
      default: "button",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  white-space: nowrap;
}
</style>