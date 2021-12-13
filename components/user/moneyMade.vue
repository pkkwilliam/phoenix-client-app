<template>
  <view>
    <text class="h4 secondary">{{ `在大熊賺了${value}元` }}</text>
  </view>
</template>

<script>
export default {
  computed: {
    value() {
      return 92322.12;
    },
  },
};
</script>