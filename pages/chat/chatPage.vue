<template>
  <view>
    <cu-custom bgColor="bg-gradual-blue" :isBack="false">
      <block slot="content">消息</block>
    </cu-custom>
    <u-empty text="消息列表為空" mode="message" v-if="isEmpty" />
  </view>
</template>

<script>
export default {
  computed: {
    isEmpty() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>