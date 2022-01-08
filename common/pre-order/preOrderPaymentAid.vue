<template>
  <view>
    <view class="space-between-center-container medium-margin-bottom-spacer">
      <text>摸魚紅包</text>
      <text class="secondary">暫無可用</text>
    </view>
    <application-line-breaker />
    <view class="space-between-center-container medium-margin-top-spacer">
      <text class="mini-margin-right-spacer">餘額</text>
      <display-currency-fish-coin :value="userBalance" />
    </view>
  </view>
</template>

<script>
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import displayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";
export default {
  components: { displayCurrencyFishCoin, ApplicationLineBreaker },
  computed: {
    userBalance() {
      return this.$store.state.userProfile.profile.balance;
    },
  },
  data() {
    return { useBalance: false };
  },
  methods: {
    onToggleUseBalance(useBalance) {
      this.$emit("onToggleUseBalance", useBalance);
    },
  },
};
</script>