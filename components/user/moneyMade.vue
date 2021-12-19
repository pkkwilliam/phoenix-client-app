<template>
  <view>
    <text class="h4 secondary">{{ `摸了${value}元` }}</text>
  </view>
</template>

<script>
export default {
  computed: {
    value() {
      return "(開發中)";
    },
  },
};
</script>