<template>
  <view>
    <view class="space-between-center-container">
      <user-card-mini :showRightArrowIcon="false" :user="displayUser" />
      <text :class="statusTextStyle">{{ statusText }}</text>
    </view>
    <view class="medium-margin-top-spacer">
      <text>{{ info }}</text>
    </view>
    <view
      class="space-between-container medium-margin-top-spacer"
      @click="onClickBarterRequest"
    >
      <view class="row-container">
        <sold-item
          :clickable="false"
          :item="barterRequest.requestItem"
          :showPrice="false"
        />
      </view>
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
import { BARTER_REQUEST_DETAIL_PAGE } from "../../route/applicationRoute";
import userCardMini from "../user/userCardMini.vue";
import {
  BARTER_REQUEST_APPROVED,
  BARTER_REQUEST_PENDING,
  getBarterRequestLabelByKey,
} from "../../enum/barterRequestStatus";
import SoldItem from "../item/soldItem.vue";
import {
  getBarterRequestInfo,
  getOppositePartyUser,
} from "./barterRequestUtil";
export default {
  components: { userCardMini, SoldItem },
  computed: {
    displayUser() {
      return getOppositePartyUser(this.barterRequest);
    },
    info() {
      return getBarterRequestInfo(this.barterRequest);
    },
    statusText() {
      return getBarterRequestLabelByKey(
        this.barterRequest.barterRequestStatus,
        this.barterRequest.barterRole
      );
    },
    statusTextStyle() {
      let style = "bold ";
      const { barterRequestStatus } = this.barterRequest;
      if (barterRequestStatus === BARTER_REQUEST_APPROVED.key) {
        style += "green";
      } else if (barterRequestStatus === BARTER_REQUEST_PENDING.key) {
        style += "orange";
      } else {
        style += "secondary";
      }
      return style;
    },
  },
  methods: {
    onClickBarterRequest() {
      uni.navigateTo({
        url: BARTER_REQUEST_DETAIL_PAGE(this.barterRequest.id).url,
      });
    },
  },

  props: {
    barterRequest: Object,
  },
};
</script>

<style lang="scss" scoped>
.image {
  border-radius: 8px;
  height: 180rpx;
  width: 180rpx;
}
</style>