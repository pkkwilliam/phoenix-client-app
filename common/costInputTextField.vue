<template>
  <view>
    <view class="textfield-row">
      <text>價格</text>
      <u-input
        class="textfield"
        placeholder="MOP 0.00"
        type="number"
        v-model="price"
        :clearable="false"
      />
    </view>
    <u-divider :half-width="500" :use-slot="false" />
    <view class="textfield-row">
      <text>入手價</text>
      <u-input
        class="textfield"
        placeholder="MOP 0.00"
        type="number"
        v-model="originalPrice"
        :clearable="false"
      />
    </view>
    <u-divider :half-width="500" :use-slot="false" />
    <view class="textfield-row">
      <text>運費</text>
      <u-input
        class="textfield"
        placeholder="MOP 0.00"
        type="number"
        v-model="shippingCost"
        :clearable="false"
        @focus="onChangeShippingCost"
      />
      <view>
        <u-radio-group v-model="selectedShippingChargeType">
          <u-radio
            v-for="(item, index) in itemShippingChargeTypes"
            :key="index"
            :name="item.key"
            @change="onSelectShippingChargeType"
          >
            {{ item.label }}
          </u-radio>
        </u-radio-group>
      </view>
    </view>
    <u-divider :half-width="500" :use-slot="false" />
    <view class="textfield-row-space-between">
      <text>允許當面交易</text>
      <u-checkbox v-model="allowFaceToFace" />
    </view>
    <view>
      <u-button
        class="confirm-button"
        shape="circle"
        type="primary"
        :disabled="disabledConfirmButton"
        @click="onClickSubmit"
        >確認
      </u-button>
    </view>
  </view>
</template>

<script>
const SELECTABLE_ITEM_SHIPPING_CHARGE_TYPE = [
  ITEM_SHIPPING_CHARGE_TYPE_INCLUDE,
  ITEM_SHIPPING_CHARGE_TYPE_CHARGE_BY_DISTANCE,
];
import UButton from "../uview-ui/components/u-button/u-button.vue";
import uInput from "../uview-ui/components/u-input/u-input.vue";
import {
  ITEM_SHIPPING_CHARGE_TYPE_CHARGE_FIXED_RATE,
  ITEM_SHIPPING_CHARGE_TYPE_INCLUDE,
  ITEM_SHIPPING_CHARGE_TYPE_CHARGE_BY_DISTANCE,
} from "../enum/itemShippingChargeTypes";
export default {
  components: { uInput, UButton },
  computed: {
    disabledConfirmButton() {
      return !this.price || !this.selectedShippingChargeType;
    },
    itemShippingChargeTypes() {
      return SELECTABLE_ITEM_SHIPPING_CHARGE_TYPE;
    },
  },
  data() {
    return {
      allowFaceToFace: true,
      price: undefined,
      originalPrice: undefined,
      selectedShippingChargeType: undefined,
      shippingCost: undefined,
    };
  },
  methods: {
    onChangeShippingCost() {
      this.selectedShippingChargeType =
        ITEM_SHIPPING_CHARGE_TYPE_CHARGE_FIXED_RATE.key;
    },
    onClickSubmit() {
      const {
        allowFaceToFace,
        price,
        originalPrice,
        selectedShippingChargeType,
        shippingCost,
      } = this;
      const deliveryTypeAndShippingCharge = {
        allowFaceToFace,
        price: parseFloat(price),
        originalPrice: parseFloat(originalPrice),
        selectedShippingChargeType,
        shippingCost: parseFloat(shippingCost),
      };
      this.onSubmit(deliveryTypeAndShippingCharge);
    },
    onSelectShippingChargeType() {
      this.shippingCost = undefined;
    },
  },
  props: {
    onSubmit: {
      default: () =>
        console.log("please override onSubmit in costInputTextField.vue"),
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.confirm-button {
  margin-top: 20rpx;
}
.textfield {
  margin-left: 20px;
}
.textfield-row {
  align-items: center;
  display: flex;
  flex-direction: row;
}
.textfield-row-space-between {
  @extend .textfield-row;
  justify-content: space-between;
  margin-bottom: 20rpx;
  margin-top: 20rpx;
}
</style>