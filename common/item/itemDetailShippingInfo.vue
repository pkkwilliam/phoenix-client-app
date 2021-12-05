<template>
  <view>
    <u-tag class="tag" :text="itemLocation" type="primary" />
    <u-tag class="tag" text="當面交易" type="primary" v-if="allowFaceToFace" />
    <u-tag class="tag" :text="shippingChargeType" type="primary" />
  </view>
</template>

<script>
import { ITEM_DELIVERY_TYPE_FACE_TO_FACE } from "../../enum/itemDeliveryType";
import { getShippingChargeTypeLabelByKey } from "../../enum/itemShippingChargeTypes";
export default {
  computed: {
    allowFaceToFace() {
      return this.item.availableDeliveryTypes.includes(
        ITEM_DELIVERY_TYPE_FACE_TO_FACE.key
      );
    },
    itemLocation() {
      return this.item.itemLocation;
    },
    shippingChargeType() {
      return getShippingChargeTypeLabelByKey(this.item.itemShippingChargeType);
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.tag {
  margin-right: 15rpx;
}
</style>