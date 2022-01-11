<template>
  <view>
    Business Page
    <view class="cu-bar foot center-row-container bottom-container">
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
  methods: {
    onClickAddBusiness() {
      uni.navigateTo({ url: BUSINESS_FORM_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-container {
  width: 100%;
}
</style>