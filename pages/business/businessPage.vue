<template>
  <view>
    <view class="container">
      <view class="large-margin-top-spacer" v-if="isEmpty">
        <u-empty text="未有企業" mode="data"></u-empty>
      </view>
      <view
        class="card medium-margin-top-spacer"
        v-for="(business, index) in businesses"
        :key="index"
      >
        <view class="space-between-center-container">
          <text>ID: {{ business.id }}</text>
          <text>狀態: {{ business.businessStatus }}</text>
        </view>
        <view class="medium-margin-top-spacer">
          <text class="h3 black bold">{{ business.name }}</text>
        </view>
      </view>
    </view>
    <view class="cu-bar foot container">
      <primary-button label="申請企業賬號" @onClick="onClickAddBusiness">
        申請企業
      </primary-button>
    </view>
  </view>
</template>

<script>
import primaryButton from "../../common/button/primaryButton.vue";
import { BUSINESS_FORM_PAGE } from "../../route/applicationRoute";

export default {
  components: { primaryButton },
  computed: {
    businesses() {
      return this.$store.state.business.content;
    },
    isEmpty() {
      return this.$store.state.business.content.length === 0;
    },
  },
  data() {
    return { business: [] };
  },
  methods: {
    onClickAddBusiness() {
      uni.navigateTo({ url: BUSINESS_FORM_PAGE().url });
    },
  },
  mounted() {
    this.$appStateService.getBusiness();
  },
};
</script>

<style lang="scss" scoped>
</style>