<template>
  <view>
    <u-icon
      custom-prefix="phoenix-custom-icon"
      name="scan-qr-code"
      size="28"
      :color="styles.black"
      @click="onClick"
    />
  </view>
</template>

<script>
import styles from "../../../uview-ui/theme.js";
export default {
  data() {
    return { styles: styles };
  },
  methods: {
    onClick() {
      return uni.scanCode({
        scanType: ["qrCode"],
        success: function (response) {
          console.log("条码类型：" + response.scanType);
          console.log("条码内容：" + response.result);
        },
      });
    },
  },
};
</script>