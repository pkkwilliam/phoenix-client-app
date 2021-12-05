<template>
  <view class="u-item-text">
    <u-subsection
      class="u-item-text"
      active-color="#ffe24b"
      font-size="22"
      mode="subsection"
      :bold="false"
      :height="50"
      :list="list"
      @change="change"
    />
  </view>
</template>

<script>
import "./applicationSubsection.scss";
export default {
  methods: {
    change(index) {
      this.$emit("onChange", index);
    },
  },
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>