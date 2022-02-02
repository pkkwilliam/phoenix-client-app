<template>
  <view>
    <u-button @click="toggleSelectModal"> 切換賬號 </u-button>
    <u-select
      confirm-text="確認"
      v-model="show"
      :list="accountList"
      @confirm="onSelect"
    />
  </view>
</template>

<script>
export default {
  computed: {
    accountList() {
      const { business, userProfile } = this.$store.state;
      const accountList = business.content
        .filter((business) => business.active)
        .map((business) => ({
          ...business,
          value: business.id,
          label: "企業賬號: " + business.name,
        }));
      accountList.unshift({
        value: "USER",
        label: "個人賬號: " + userProfile.profile.smsNumber,
      });
      return accountList;
    },
  },
  data() {
    return { show: false };
  },
  methods: {
    toggleSelectModal() {
      this.show = !this.show;
    },
    onSelect(selectedBusiness) {
      const { label, value } = selectedBusiness;
      if (value === "USER") {
        // is original user account
      } else {
        // is business account
      }
    },
  },
  mounted() {
    this.$appStateService.getBusiness();
  },
  props: {},
};
</script>

<style lang="scss" scoped>
</style>