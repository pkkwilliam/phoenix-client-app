<template>
  <view class="container safearea-container">
    <view class="top-button-row view-container">
      <text @click="onClickCancel">取消</text>
      <u-button
        class="submit-button"
        shape="circle"
        size="mini"
        type="primary"
        @click="onClickSubmit"
        >發佈</u-button
      >
    </view>
    <view class="view-container">
      <u-input
        class="textarea-input"
        placeholder="說說你的使用感受，入手渠道，轉手原因..."
        type="textarea"
        v-model="description"
        :autoHeight="true"
        :height="200"
        :maxlength="9999"
      ></u-input>
    </view>
    <view class="view-container">
      <scroll-view
        class="scroll-view-horizontal item-detail-scroll-view"
        :scroll-x="true"
      >
        <media-uploader :onChangeMedia="onChangeMediaList" />
      </scroll-view>
    </view>
    <view class="view-container">
      <icon-sub-header
        iconName="map"
        label="物品所在地區"
        :onSelect="onSelectCategory"
      />
      <view class="sub-view-container">
        <scroll-view
          class="scroll-view-horizontal item-detail-scroll-view"
          scroll-x="true"
        >
          <selectable-area-location-tags :onSelect="onSelectAreaLocation" />
        </scroll-view>
      </view>
    </view>
    <view class="view-container">
      <icon-sub-header iconName="list" label="分類/類型/成色" />
      <view class="sub-view-container">
        <view class="item-detail-sub-section-view">
          <text>分類</text>
          <scroll-view
            class="scroll-view-horizontal item-detail-scroll-view"
            scroll-x="true"
          >
            <selectable-category-tags :onSelect="onSelectCategory" />
          </scroll-view>
        </view>
        <view
          class="item-detail-sub-section-view"
          v-if="getCategory"
          :onSelect="onSelectCategory"
        >
          <text>類型</text>
          <scroll-view
            class="scroll-view-horizontal item-detail-scroll-view"
            scroll-x="true"
          >
            <selectable-sub-category-tags
              :category="getCategory"
              :onSelect="onSelectSubCategory"
            />
          </scroll-view>
        </view>
        <view class="item-detail-sub-section-view">
          <text>成色</text>
          <scroll-view
            class="scroll-view-horizontal item-detail-scroll-view"
            scroll-x="true"
          >
            <selectable-item-condition-tags :onSelect="onSelectItemCondition" />
          </scroll-view>
        </view>
      </view>
    </view>
    <view class="view-container">
      <u-collapse>
        <u-collapse-item>
          <view class="collapse-container" slot="title">
            <icon-sub-header iconName="rmb" label="價格" />
            <display-curreny-price :value="displayPrice" />
          </view>
          <view class="cost-input-container">
            <cost-input-text-field
              :onSubmit="onConfirmDeliveryTypeAndShippingCharge"
            />
          </view>
        </u-collapse-item>
      </u-collapse>
    </view>
  </view>
</template>

<script>
import MediaUploader from "../common/mediaUploader.vue";
import IconSubHeader from "../common/iconSubHeader.vue";
import ImageUploader from "../common/mediaUploader.vue";
import PrimaryButton from "../common/primaryButton.vue";
import SelectableAreaLocationTags from "../common/selectableAreaLocationTags.vue";
import SelectableCategoryTags from "../common/selectableCategoryTags.vue";
import SelectableItemConditionTags from "../common/selectableItemConditionTags.vue";
import SelectableSubCategoryTags from "../common/selectableSubCategoryTags.vue";
import UButton from "../uview-ui/components/u-button/u-button.vue";
import CostInputTextField from "../common/costInputTextField.vue";
import DisplayCurrenyPrice from "../common/displayCurrenyPrice.vue";
import { createItemServiceRequestBody } from "../service/serviceRequestBodyUtil";
import { CREATE_ITEM } from "../service/service";
import { uploadMedia } from "../util/uploadMediaUtil";
export default {
  components: {
    PrimaryButton,
    SelectableAreaLocationTags,
    SelectableItemConditionTags,
    UButton,
    IconSubHeader,
    SelectableCategoryTags,
    SelectableSubCategoryTags,
    ImageUploader,
    MediaUploader,
    CostInputTextField,
    DisplayCurrenyPrice,
  },
  computed: {
    displayPrice() {
      let price = 0;
      if (this.deliveryTypeAndShippingCharge) {
        return (price = this.deliveryTypeAndShippingCharge.price);
      }
      return price;
    },
    getCategory() {
      return this.selectedCategory;
    },
  },
  data() {
    return {
      deliveryTypeAndShippingCharge: undefined,
      description: undefined,
      selectedAreaLocation: undefined,
      selectedCategory: undefined,
      selectedItemCondition: undefined,
      selectedMedia: [],
      selectedSubCategory: undefined,
    };
  },
  methods: {
    onClickCancel() {
      uni.navigateBack();
    },
    async onClickSubmit() {
      const {
        deliveryTypeAndShippingCharge,
        description,
        selectedAreaLocation,
        selectedCategory,
        selectedItemCondition,
        selectedSubCategory,
        selectedMedia,
      } = this;
      const {
        allowFaceToFace,
        price,
        originalPrice,
        selectedShippingChargeType,
        shippingCost,
      } = deliveryTypeAndShippingCharge;
      const imageUrlsJsonResponse = await Promise.all(
        selectedMedia.map(
          async (media) => await uploadMedia(media.url, this.execute)
        )
      );
      const requestBody = createItemServiceRequestBody(
        description,
        imageUrlsJsonResponse,
        selectedAreaLocation,
        selectedCategory,
        selectedSubCategory,
        selectedItemCondition,
        price,
        originalPrice,
        selectedShippingChargeType,
        shippingCost,
        allowFaceToFace
      );
      this.execute(CREATE_ITEM(requestBody)).then((response) => {
        uni.navigateBack();
      });
    },
    onChangeMediaList(listOfMedia) {
      this.selectedMedia = listOfMedia;
    },
    onConfirmDeliveryTypeAndShippingCharge(values) {
      this.deliveryTypeAndShippingCharge = values;
    },
    onSelectAreaLocation(areaLocation) {
      this.selectedAreaLocation = areaLocation;
    },
    onSelectCategory(category) {
      this.selectedCategory = category;
    },
    onSelectItemCondition(ItemCondition) {
      this.selectedItemCondition = ItemCondition;
    },
    onSelectSubCategory(subCategory) {
      this.selectedSubCategory = subCategory;
    },
  },
};
</script>

<style scope lang="scss">
.collapse-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.container {
  margin: 20rpx;
}
.cost-input-container {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 20rpx;
}
.item-detail-scroll-view {
  margin-left: 20rpx;
}
.item-detail-sub-section-view {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 20rpx;
  white-space: nowrap;
}
.top-button-row {
  align-items: center;
  display: flex;
  justify-content: space-between;
  .submit-button {
    margin: 0px;
  }
}
.textarea-input {
  margin-left: 20rpx;
  margin-right: 20rpx;
}
</style>