<template>
  <view>
    <view class="space-between-center-container">
      <user-card-mini :user="displayUser" />
      <text :class="statusTextStyle">{{ statusText }}</text>
    </view>
    <view class="medium-margin-top-spacer">
      <barter-tag />
    </view>
    <view class="medium-margin-top-spacer">
      {{ info }}
    </view>
    <view class="space-between-container" @click="onClickBarterOrder">
      <sold-item
        class="medium-margin-top-spacer"
        :clickable="false"
        :item="barterOrder.barterRequest.requestItem"
        :showPrice="false"
      />
      <u-icon
        class="arrow-right"
        name="arrow-right"
        color="#a3a3a3"
        :size="26"
      />
    </view>
  </view>
</template>

<script>
import BarterTag from "../../components/tag/barterTag.vue";
import {
  BARTER_ORDER_STATUS_FINISHED,
  getLabelByBarterOrderStatusKey,
} from "../../enum/barterOrderStatus";
import { BARTER_ORDER_DETAIL_PAGE } from "../../route/applicationRoute";
import {
  getBarterRequestInfo,
  getOppositePartyUser,
} from "../barterRequest/barterRequestUtil";
import soldItem from "../item/soldItem.vue";
import UserCardMini from "../user/userCardMini.vue";
export default {
  components: { soldItem, UserCardMini, BarterTag },
  computed: {
    displayUser() {
      return getOppositePartyUser(this.barterOrder.barterRequest);
    },
    info() {
      return getBarterRequestInfo(this.barterOrder.barterRequest);
    },
    statusText() {
      return getLabelByBarterOrderStatusKey(this.barterOrder.barterOrderStatus);
    },
    statusTextStyle() {
      return `bold ${
        this.barterOrder.barterOrderStatus === BARTER_ORDER_STATUS_FINISHED.key
          ? "secondary"
          : "orange"
      }`;
    },
  },
  methods: {
    onClickBarterOrder() {
      uni.navigateTo({
        url: BARTER_ORDER_DETAIL_PAGE(this.barterOrder.id).url,
      });
    },
  },
  props: {
    barterOrder: Object,
  },
};
</script>