<template>
  <view>
    <u-button
      shape="circle"
      size="medium"
      :custom-style="customStyle"
      @click="$emit('onClick')"
    >
      {{ label }}
    </u-button>
  </view>
</template>

<script>
import styles from "../../uview-ui/theme.js";
export default {
  computed: {
    customStyle() {
      return {
        backgroundColor: styles.darkOrange,
        color: styles.white,
      };
    },
  },
  props: {
    label: String,
  },
};
</script>

