<template>
  <view>
    <text class="h3 black bold">訂單信息</text>
    <view
      class="space-between-center-container medium-margin-top-spacer"
      v-for="(info, index) in infos"
      :key="index"
    >
      <text>{{ info.title }}</text>
      <text>{{ info.content }}</text>
    </view>
  </view>
</template>

<script>
import { getLabelByBarterOrderStatusKey } from "../../enum/barterOrderStatus";
import { convertSystemDateToDisplayDateTime } from "../../util/dateUtil";
export default {
  computed: {
    infos() {
      const { barterOrderStatus, createTime, id, updateTime } =
        this.barterOrder;
      const list = [
        {
          title: "訂單編號",
          content: this.getCreateOrderIdPrefix(createTime) + id,
        },
        {
          title: "訂單狀態",
          content: getLabelByBarterOrderStatusKey(barterOrderStatus),
        },
        {
          title: "創單時間",
          content: this.getCreateTime(createTime),
        },
      ];
      if (updateTime) {
        list.push({
          title: "更新時間",
          content: this.getCreateTime(updateTime),
        });
      }
      return list;
    },
  },
  methods: {
    getCreateOrderIdPrefix(createTime) {
      const convertedDate = new Date(createTime.substring(0, 10));
      return `${convertedDate.getFullYear()}${convertedDate.getMonth()}${convertedDate.getDate()}`;
    },
    getCreateTime(createTime) {
      return convertSystemDateToDisplayDateTime(createTime);
    },
  },
  props: {
    barterOrder: Object,
  },
};
</script>