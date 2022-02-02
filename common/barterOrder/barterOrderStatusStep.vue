<template>
  <view> <application-steps :steps="steps" /> </view>
</template>

<script>
import applicationSteps from "../applicationComponent/applicationSteps.vue";
export default {
  components: { applicationSteps },
  computed: {
    steps() {
      const { barterOrderStatus, offererReceived, receiverReceived } =
        this.barterOrder;
      return [
        [{ checked: true, label: "確認換物" }],
        [
          { checked: offererReceived, label: "請求方確認" },
          { checked: receiverReceived, label: "接受方確認" },
        ],
        [{ checked: offererReceived && receiverReceived, label: "完成" }],
      ];
    },
  },
  props: {
    barterOrder: Object,
  },
};
</script>
