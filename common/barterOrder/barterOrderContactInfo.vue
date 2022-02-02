<template>
  <view>
    <text class="h3 black bold">聯絡人</text>
    <view class="medium-margin-top-spacer">
      <view class="space-between-container">
        <text class="h4 secondary">暱稱</text>
        <text class="h4 secondary">{{ contactUser.nickname }}</text>
      </view>
      <view class="space-between-container">
        <text class="h4 secondary">電話</text>
        <text class="h4 secondary">
          {{ `(${contactUser.countryCode}) ${contactUser.smsNumber}` }}
        </text>
      </view>
    </view>
  </view>
</template>

<script>
import { BARTER_ROLE_OFFERER } from "../../enum/barterRole";
export default {
  computed: {
    contactUser() {
      const { createBy, receiver, barterRole } = this.barterOrder.barterRequest;
      return barterRole === BARTER_ROLE_OFFERER.key ? receiver : createBy;
    },
  },
  props: {
    barterOrder: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>