<template>
  <view>
    <view>
      <seller-profile-mini :user="item.createBy" />
      <display-curreny-price :value="item.price" />
      <strike-through-currency-price :value="item.originalPrice" />
    </view>
    <image v-for="(image, index) in images" :key="index" />
    <text class="h5 black">{{ description }}</text>
    <view>
      <mpay-guarantee />
      <item-view-and-save-count
        :saveCount="item.saveCount"
        :viewCount="item.viewCount"
      />
    </view>
  </view>
</template>

<script>
import DisplayCurrenyPrice from "../displayCurrenyPrice.vue";
import MpayGuarantee from "../mpayGuarantee.vue";
import sellerProfileMini from "../sellerProfileMini.vue";
import StrikeThroughCurrencyPrice from "../strikeThroughCurrencyPrice.vue";
import ItemViewAndSaveCount from "./itemViewAndSaveCount.vue";
export default {
  components: {
    sellerProfileMini,
    DisplayCurrenyPrice,
    StrikeThroughCurrencyPrice,
    MpayGuarantee,
    ItemViewAndSaveCount,
  },
  computed: {
    description() {
      return this.item.description.substring(0, 30);
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