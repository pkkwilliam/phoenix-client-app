<template>
  <view>
    <view class="container">
      <view
        class="space-between-center-container card medium-margin-top-spacer"
        v-for="(address, index) in addresses"
        :key="index"
      >
        <view class="column-container" @click="onClickAddress(address)">
          <text class="h4 black bold">{{
            `${address.contactName} ${address.phoneNumber}`
          }}</text>
          <view class="mini-margin-top-spacer">
            <text class="h4 secondary">{{
              `${address.street} ${address.unit}`
            }}</text>
          </view>
        </view>
        <u-icon
          class="arrow-right"
          name="arrow-right"
          color="#a3a3a3"
          :size="26"
          @click="onClickRightIcon(address)"
        />
      </view>
    </view>
    <view class="cu-bar foot container">
      <primary-button label="創建地址" @click="onClickCreateAddress" />
    </view>
  </view>
</template>

<script>
import StickBottomBar from "../common/navigation/stickBottomBar.vue";
import primaryButton from "../common/button/primaryButton.vue";
import { ADDRESS_FORM_PAGE } from "../route/applicationRoute";
export default {
  components: { primaryButton, StickBottomBar },
  computed: {
    addresses() {
      return this.$store.state.address.content;
    },
  },
  methods: {
    onClickAddress(address) {
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];
      prevPage.selectedAddress = address;
      uni.navigateBack({ delta: 1 });
    },
    onClickCreateAddress() {
      uni.navigateTo({ url: ADDRESS_FORM_PAGE().url });
    },
    onClickRightIcon(address) {
      uni.navigateTo({ url: ADDRESS_FORM_PAGE(address).url });
    },
  },
  mounted() {
    this.$appStateService.getAddress();
  },
};
</script>

<style lang="scss" scoped>
</style>