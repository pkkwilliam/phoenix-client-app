<template>
  <view class="space-between-center-container">
    <view class="row-center-container">
      <u-icon name="home" :size="40" />
      <view class="small-margin-left-spacer">
        <text>500.00現金可以提取</text>
      </view>
    </view>
    <border-button
      label="去提取"
      size="mini"
      :backgroundColor="$styles.white"
      :color="$styles.darkOrange"
    />
  </view>
</template>

<script>
import borderButton from "../../../common/button/borderButton.vue";
import { CREATE_ITEM_TAB } from "../../../route/applicationRoute";
export default {
  components: { borderButton },
  methods: {
    onClick() {
      uni.navigateTo({ url: CREATE_ITEM_TAB().url });
    },
  },
};
</script>