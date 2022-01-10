<template>
  <view class="container safearea-container">
    <view class="space-between-center-container medium-margin-top-spacer">
      <text @click="onClickCancel">取消</text>
      <u-button
        class="submit-button"
        shape="circle"
        size="mini"
        type="primary"
        :disabled="disabledSubmitButton"
        :loading="loading"
        @click="onClickSubmit"
      >
        {{ submitLabel }}
      </u-button>
    </view>
    <view class="medium-margin-top-spacer">
      <u-input
        placeholder="說說你的使用感受，入手渠道，轉手原因..."
        type="textarea"
        v-model="description"
        :autoHeight="true"
        :height="200"
        :maxlength="9999"
      />
    </view>
    <!-- image upload -->
    <view class="medium-margin-top-spacer">
      <scroll-view class="u-scroll-view" scroll-x scroll-with-animation>
        <media-uploader :onChangeMedia="onChangeMediaList" />
      </scroll-view>
    </view>
    <!-- item location -->
    <view class="medium-margin-top-spacer">
      <icon-sub-header
        iconName="location"
        label="物品所在地區"
        :onSelect="onSelectCategory"
      />
      <view class="medium-margin-top-spacer">
        <scroll-view scroll-x class="u-scroll-view" scroll-with-animation>
          <selectable-area-location-tags :onSelect="onSelectAreaLocation" />
        </scroll-view>
      </view>
    </view>
    <!-- item category and condition -->
    <view class="medium-margin-top-spacer">
      <icon-sub-header iconName="list" label="分類/類型/成色" />
      <view class="row-center-container medium-margin-top-spacer">
        <view class="label-container medium-margin-right-spacer">
          <text>分類</text>
        </view>
        <scroll-view scroll-x class="u-scroll-view" scroll-with-animation>
          <selectable-category-tags :onSelect="onSelectCategory" />
        </scroll-view>
      </view>
      <view
        class="row-center-container medium-margin-top-spacer"
        v-if="selectedCategory"
        :onSelect="onSelectCategory"
      >
        <view class="label-container medium-margin-right-spacer">
          <text>類型</text>
        </view>
        <scroll-view class="u-scroll-view" scroll-x scroll-with-animation>
          <selectable-sub-category-tags
            :category="selectedCategory"
            :onSelect="onSelectSubCategory"
          />
        </scroll-view>
      </view>
      <view class="row-center-container medium-margin-top-spacer">
        <view class="label-container medium-margin-right-spacer">
          <text>成色</text>
        </view>
        <view>
          <scroll-view class="u-scroll-view" scroll-x>
            <selectable-item-condition-tags @onSelect="onSelectItemCondition" />
          </scroll-view>
        </view>
      </view>
    </view>

    <view class="medium-margin-top-spacer">
      <view class="space-between-center-container">
        <icon-sub-header iconName="dollar" label="價格" />
        <view class="row-center-container" @click="onToggleCostInput">
          <display-currency-fish-coin :value="displayPrice" />
          <u-icon name="arrow-right" color="#a3a3a3" :size="26" />
        </view>
      </view>
      <u-popup border-radius="16" mode="bottom" v-model="showCostInput">
        <view class="card">
          <cost-input-text-field
            :deliveryTypeAndShippingCharge="deliveryTypeAndShippingCharge"
            @onSubmit="onConfirmDeliveryTypeAndShippingCharge"
          />
        </view>
      </u-popup>
    </view>
  </view>
</template>

<script>
import MediaUploader from "../common/mediaUploader.vue";
import IconSubHeader from "../common/iconSubHeader.vue";
import ImageUploader from "../common/mediaUploader.vue";
import PrimaryButton from "../common/button/primaryButton.vue";
import SelectableAreaLocationTags from "../common/createItem/selectableAreaLocationTags.vue";
import SelectableCategoryTags from "../common/createItem/selectableCategoryTags.vue";
import SelectableItemConditionTags from "../common/createItem/selectableItemConditionTags.vue";
import SelectableSubCategoryTags from "../common/createItem/selectableSubCategoryTags.vue";
import UButton from "../uview-ui/components/u-button/u-button.vue";
import CostInputTextField from "../common/costInputTextField.vue";
import { createItemServiceRequestBody } from "../service/serviceRequestBodyUtil";
import { CREATE_ITEM } from "../service/service";
import { uploadMedia } from "../util/uploadMediaUtil";
import UPopup from "../uview-ui/components/u-popup/u-popup.vue";
import {
  getRouterJsonParam,
  ITEM_DETAIL_PAGE,
} from "../route/applicationRoute";
import DisplayCurrencyFishCoin from "../common/displayCurrency/displayCurrencyFishCoin.vue";
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
    UPopup,
    DisplayCurrencyFishCoin,
  },
  computed: {
    displayPrice() {
      let price = 0;
      if (this.deliveryTypeAndShippingCharge) {
        return (price = this.deliveryTypeAndShippingCharge.price);
      }
      return price;
    },
    disabledSubmitButton() {
      const {
        description,
        selectedAreaLocation,
        selectedCategory,
        selectedItemCondition,
        selectedMedia,
        selectedSubCategory,
      } = this;
      const {
        allowFaceToFace,
        price,
        originalPrice,
        selectedShippingChargeType,
        shippingCost,
      } = this?.deliveryTypeAndShippingCharge ?? {};
      return (
        !description ||
        !selectedAreaLocation ||
        !selectedCategory ||
        !selectedItemCondition ||
        selectedMedia.length === 0 ||
        !price ||
        !selectedShippingChargeType
      );
    },
    getCategory() {
      return this.selectedCategory;
    },
    submitLabel() {
      return this.isEdit ? "修改" : "發佈";
    },
  },
  data() {
    return {
      deliveryTypeAndShippingCharge: undefined,
      description: undefined,
      isEdit: false,
      loading: false,
      selectedAreaLocation: undefined,
      selectedCategory: undefined,
      selectedItemCondition: undefined,
      selectedMedia: [],
      selectedSubCategory: undefined,
      showCostInput: false,
    };
  },
  methods: {
    onClickCancel() {
      uni.navigateBack();
    },
    async onClickSubmit() {
      this.loading = true;
      try {
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
          uni.showToast({ title: "創建成功" });
          setTimeout(() => {
            uni.navigateBack();
            uni.navigateTo({ url: ITEM_DETAIL_PAGE(response).url });
          }, 1000);
        });
      } finally {
        this.loading = false;
      }
    },
    onChangeMediaList(listOfMedia) {
      this.selectedMedia = listOfMedia;
    },
    onConfirmDeliveryTypeAndShippingCharge(values) {
      this.deliveryTypeAndShippingCharge = values;
      this.showCostInput = false;
    },
    onSelectAreaLocation(areaLocation) {
      this.selectedAreaLocation = areaLocation;
    },
    onSelectCategory(category) {
      this.selectedCategory = category;
    },
    onSelectItemCondition(itemCondition) {
      this.selectedItemCondition = itemCondition;
    },
    onSelectSubCategory(subCategory) {
      this.selectedSubCategory = subCategory;
    },
    onToggleCostInput() {
      this.showCostInput = !this.showCostInput;
    },
    setEditItem(item) {
      this.isEdit = true;
      const {
        availableDeliveryTypes,
        description,
        images,
        itemCondition,
        itemLocation,
        itemShippingInfo,
        category,
        originalPrice,
        price,
        quantity,
        subCategory,
        title,
      } = item;
      this.description = description;
      this.selectedMedia = images;
      this.selectedItemCondition = itemCondition;
      this.selectedAreaLocation = itemLocation;
      this.selectedCategory = category;
      this.selectedSubCategory = subCategory;
    },
  },

  onLoad(options) {
    const item = getRouterJsonParam(options, "item");
    if (item) {
      this.setEditItem(item);
    }
  },
};
</script>

<style scope lang="scss">
.container {
  padding: 20rpx;
}
.label-container {
  white-space: nowrap;
}
.submit-button {
  margin: 0px;
}
</style>