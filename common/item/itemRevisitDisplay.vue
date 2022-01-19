<template>
  <view>
    <view>
      <user-card-mini :user="item.createBy" />
      <display-currency-fish-coin :value="item.price" />
      <strike-through-currency-price :value="item.originalPrice" />
    </view>
    <image v-for="(image, index) in images" :key="index" />
    <text class="h5 black">{{ description }}</text>
    <view>
      <platform-guarantee />
      <item-view-and-save-count
        :saveCount="item.saveCount"
        :viewCount="item.viewCount"
      />
    </view>
  </view>
</template>

<script>
import DisplayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";
import MpayGuarantee from "../../components/guarantee/mpayGuarantee.vue";
import StrikeThroughCurrencyPrice from "../strikeThroughCurrencyPrice.vue";
import UserCardMini from "../user/userCardMini.vue";
import ItemViewAndSaveCount from "./itemViewAndSaveCount.vue";
import PlatformGuarantee from "../../components/guarantee/platformGuarantee.vue";
export default {
  components: {
    StrikeThroughCurrencyPrice,
    MpayGuarantee,
    ItemViewAndSaveCount,
    UserCardMini,
    DisplayCurrencyFishCoin,
    PlatformGuarantee,
  },
  computed: {
    description() {
      return this.item.description.substring(0, 15);
    },
  },
  props: {
    item: Object,
    showPrice: {
      default: true,
      type: Boolean,
    },
    showQuantity: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>