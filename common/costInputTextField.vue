<template>
  <view class="cost-input-container">
    <view class="align-end-container">
      <u-button
        size="mini"
        shape="circle"
        type="primary"
        :disabled="disabledConfirmButton"
        :style="{ margin: 0 }"
        @click="onClickSubmit"
        >確認
      </u-button>
    </view>

    <application-tip
      class="medium-margin-top-spacer"
      label="買家付款後摸魚會提示您聯繫買家進行交易"
    />
    <view
      class="
        row-center-container
        mini-margin-top-spacer
        medium-margin-bottom-spacer
      "
    >
      <u-icon custom-prefix="phoenix-custom-icon" name="face" size="38" />
      <text>允許當面交易</text>
      <view class="medium-margin-left-spacer">
        <u-checkbox shape="circle" v-model="allowFaceToFace" />
      </view>
    </view>
    <u-divider :half-width="500" :use-slot="false" />
    <view class="row-center-container">
      <text>售出價</text>
      <u-input
        class="textfield"
        placeholder="MOP 0.00"
        type="number"
        v-model="price"
        :clearable="false"
      />
    </view>
    <u-divider :half-width="500" :use-slot="false" />
    <view class="row-center-container">
      <text>購入價</text>
      <u-input
        class="textfield"
        placeholder="MOP 0.00"
        type="number"
        v-model="originalPrice"
        :clearable="false"
      />
    </view>
    <u-divider :half-width="500" :use-slot="false" />

    <application-tip
      class="medium-margin-top-spacer"
      label="由摸魚提拱上門收件並上門派件運輸"
    />
    <view class="space-between-center-container mini-margin-top-spacer">
      <view class="row-center-container">
        <u-icon custom-prefix="phoenix-custom-icon" name="truck" size="38" />
        <text class="small-margin-left-spacer">摸魚運輸</text>
      </view>
      <view class="row-center-container">
        <shipping-cost-estimate-button />
      </view>
    </view>
    <view class="row-center-container medium-margin-top-spacer">
      <view>
        <u-radio-group v-model="selectedShippingChargeType" :wrap="true">
          <u-radio
            v-for="(shippingChargeType, index) in itemShippingChargeTypes"
            :key="index"
            :name="shippingChargeType.key"
            @change="onSelectShippingChargeType(shippingChargeType)"
          >
            {{ shippingChargeType.label }}
          </u-radio>
        </u-radio-group>
      </view>
    </view>
    <view class="medium-margin-top-spacer">
      <view v-if="showFixedShippingCostTextField">
        <text>固定收取</text>
        <u-input
          class="textfield"
          placeholder="MOP 0.00"
          type="number"
          v-model="shippingCost"
          :clearable="false"
          @focus="onChangeShippingCost"
        />
      </view>
    </view>
  </view>
</template>

<script>
const SELECTABLE_ITEM_SHIPPING_CHARGE_TYPE = [
  ITEM_SHIPPING_CHARGE_TYPE_INCLUDE,
  ITEM_SHIPPING_CHARGE_TYPE_CHARGE_FIXED_RATE,
];
import UButton from "../uview-ui/components/u-button/u-button.vue";
import uInput from "../uview-ui/components/u-input/u-input.vue";
import {
  ITEM_SHIPPING_CHARGE_TYPE_CHARGE_FIXED_RATE,
  ITEM_SHIPPING_CHARGE_TYPE_INCLUDE,
  ITEM_SHIPPING_CHARGE_TYPE_CHARGE_BY_DISTANCE,
  getShippingChargeTypeObjectByKey,
} from "../enum/itemShippingChargeTypes";
import ApplicationTip from "./applicationTip.vue";
import ShippingCostEstimateButton from "../components/navigationButton/shipping/shippingCostEstimateButton.vue";
export default {
  components: { uInput, UButton, ApplicationTip, ShippingCostEstimateButton },
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
      showFixedShippingCostTextField: false,
      showItemDimensionTextField: false,
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
      this.$emit("onSubmit", deliveryTypeAndShippingCharge);
    },
    onSelectShippingChargeType(shippingChargeType) {
      if (shippingChargeType === ITEM_SHIPPING_CHARGE_TYPE_CHARGE_FIXED_RATE) {
        this.showFixedShippingCostTextField = true;
        this.showItemDimensionTextField = false;
      } else if (
        shippingChargeType === ITEM_SHIPPING_CHARGE_TYPE_CHARGE_BY_DISTANCE
      ) {
        this.showFixedShippingCostTextField = false;
        this.showItemDimensionTextField = true;
        this.shippingCost = undefined;
      } else {
        this.showFixedShippingCostTextField = false;
        this.showItemDimensionTextField = false;
        this.shippingCost = undefined;
      }
    },
  },
  mounted() {
    if (this.deliveryTypeAndShippingCharge) {
      const {
        allowFaceToFace,
        price,
        originalPrice,
        selectedShippingChargeType,
        shippingCost,
      } = this.deliveryTypeAndShippingCharge;
      this.allowFaceToFace = allowFaceToFace;
      this.price = price;
      this.originalPrice = originalPrice;
      this.shippingCost = shippingCost;
      this.selectedShippingChargeType = selectedShippingChargeType;
      this.onSelectShippingChargeType(
        getShippingChargeTypeObjectByKey(selectedShippingChargeType)
      );
    }
  },
  props: {
    onSubmit: {
      default: () =>
        console.log("please override onSubmit in costInputTextField.vue"),
      type: Function,
    },
    deliveryTypeAndShippingCharge: {
      default: () => {},
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.cost-input-container {
  padding-bottom: 150rpx;
}
.textfield {
  margin-left: 20px;
}
</style>