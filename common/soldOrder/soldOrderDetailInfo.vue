<template>
  <view>
    <view
      class="space-between-center-container medium-margin-top-spacer"
      v-for="(row, index) in rows"
      :key="index"
    >
      <text>{{ row.title }}</text>
      <text class="value-text">{{ row.value }}</text>
    </view>
  </view>
</template>

<script>
import { convertSystemDateToDisplayDateTime } from "../../util/dateUtil";
export default {
  computed: {
    rows() {
      const { createBy, id, item, createTime, paymentTime, remark } =
        this.order;
      const result = [];
      if (this.type === "buyer") {
        result.push({ title: "賣家ID", value: item.createBy.sid });
      } else {
        result.push({ title: "買家ID", value: createBy.sid });
      }
      return [
        ...result,
        { title: "訂單信息", value: remark },
        { title: "交易單號", value: this.createOrderIdPrefix(createTime) + id },
        {
          title: "創建時間",
          value: convertSystemDateToDisplayDateTime(createTime),
        },
        {
          title: "付款時間",
          value: convertSystemDateToDisplayDateTime(paymentTime),
        },
      ];
    },
  },
  methods: {
    createOrderIdPrefix(createTime) {
      const convertedDate = new Date(createTime);
      return `${convertedDate.getFullYear()}${convertedDate.getMonth()}${convertedDate.getDate()}`;
    },
  },
  props: {
    order: Object,
    type: {
      default: "buyer",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.value-text {
  margin-left: 12rpx;
}
</style>