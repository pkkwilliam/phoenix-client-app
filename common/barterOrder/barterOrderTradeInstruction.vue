<template>
  <view>
    <text class="h3 black bold">交易响導</text>
    <view class="medium-margin-top-spacer">
      <view class="row-container">
        <text class="h4 lightly-bold title-text">交易方式</text>
        <text class="value-text secondary">{{ deliveryType }}</text>
      </view>
      <view class="row-container small-margin-top-spacer">
        <text class="h4 lightly-bold title-text">交易指引</text>
        <text class="value-text secondary">{{ instruction }}</text>
      </view>
      <view class="row-container small-margin-top-spacer">
        <text class="h4 lightly-bold title-text">交易提示</text>
        <text class="value-text secondary">{{ tips }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import {
  ITEM_DELIVERY_TYPE_FACE_TO_FACE,
  ITEM_DELIVERY_TYPE_THIRD_PARTY_DELIVERY,
} from "../../enum/itemDeliveryType";
export default {
  computed: {
    deliveryType() {
      return this.barterOrder.deliveryType ===
        ITEM_DELIVERY_TYPE_FACE_TO_FACE.key
        ? ITEM_DELIVERY_TYPE_FACE_TO_FACE.label
        : ITEM_DELIVERY_TYPE_THIRD_PARTY_DELIVERY.label;
    },
    instruction() {
      return this.barterOrder.deliveryType ===
        ITEM_DELIVERY_TYPE_FACE_TO_FACE.key
        ? "請您在買家付款時間後的48小時內以電話方式聯繫買家並在雙方同意的地點進行貨物交接\n當貨物交接完畢請點擊下方的”確認發貨”按鈕，貨款會暫時由平台保管直至在買家收貨或7天後轉至賣方的賬戶"
        : "已收取買方運費\n物流方會在48小時內聯繫您，此時您可以把物品稍為進行打包以防運輸途中破損\n貨款會暫時由平台保管直至在買家收貨或7天後轉至賣方的賬戶";
    },
    tips() {
      return this.barterOrder.deliveryType ===
        ITEM_DELIVERY_TYPE_FACE_TO_FACE.key
        ? "請拍照保存物品交易時狀態，發生交易爭議時，可作為判斷依據"
        : "請拍照保存物品上車時狀態，發生交易爭議時，可作為判斷依據";
    },
  },
  props: {
    barterOrder: Object,
  },
};
</script>

<style lang="scss" scoped>
.title-text {
  white-space: pre;
}
.value-text {
  margin-left: 12rpx;
}
</style>