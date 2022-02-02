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
        <!-- <media-uploader :onChangeMedia="onChangeMediaList" /> -->
        <!-- <auto-media-uploader v-model="selectedMedia" /> -->
        <auto-media-uploader-v-2
          v-model="selectedMedia"
          :initialMediaUrls="selectedMedia.mediaUrls"
        />
      </scroll-view>
    </view>
    <!-- item location -->
    <view class="medium-margin-top-spacer">
      <icon-sub-header iconName="location" label="物品所在地區" />
      <view class="medium-margin-top-spacer">
        <scroll-view scroll-x class="u-scroll-view" scroll-with-animation>
          <selectable-area-location-tags v-model="selectedAreaLocation" />
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
          <selectable-category-tags v-model="selectedCategory" />
        </scroll-view>
      </view>
      <view
        class="row-center-container medium-margin-top-spacer"
        v-if="selectedCategory"
      >
        <view class="label-container medium-margin-right-spacer">
          <text>類型</text>
        </view>
        <scroll-view class="u-scroll-view" scroll-x scroll-with-animation>
          <selectable-sub-category-tags
            v-model="selectedSubCategory"
            :category="selectedCategory"
          />
        </scroll-view>
      </view>
      <view class="row-center-container medium-margin-top-spacer">
        <view class="label-container medium-margin-right-spacer">
          <text>成色</text>
        </view>
        <view>
          <scroll-view class="u-scroll-view" scroll-x>
            <selectable-item-condition-tags v-model="selectedItemCondition" />
          </scroll-view>
        </view>
      </view>
    </view>

    <view class="medium-margin-top-spacer">
      <view class="space-between-center-container">
        <icon-sub-header iconName="dollar" label="價格" />
        <view class="row-center-container" @click="onToggleCostInput">
          <view class="medium-margin-right-spacer">
            <text class="green" v-if="isPriceZero">保護環境 以物換物</text>
          </view>
          <display-currency-fish-coin :value="displayPrice" />
          <u-icon name="arrow-right" color="#a3a3a3" :size="26" />
        </view>
      </view>
      <u-popup border-radius="16" mode="bottom" v-model="showCostInput">
        <view class="card">
          <barter-cost-input-text-field
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
import { CREATE_ITEM, UPDATE_ITEM } from "../service/service";
import UPopup from "../uview-ui/components/u-popup/u-popup.vue";
import {
  getRouterJsonParam,
  ITEM_DETAIL_PAGE,
} from "../route/applicationRoute";
import DisplayCurrencyFishCoin from "../common/displayCurrency/displayCurrencyFishCoin.vue";
import BarterCostInputTextField from "../common/createItem/barterCostInputTextField.vue";
import AutoMediaUploader from "../common/media/autoMediaUploader.vue";
import AutoMediaUploaderV2 from "../common/media/autoMediaUploaderV2.vue";
import { ITEM_DELIVERY_TYPE_FACE_TO_FACE } from "../enum/itemDeliveryType";
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
    BarterCostInputTextField,
    AutoMediaUploader,
    AutoMediaUploaderV2,
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
      if (selectedMedia.inProgress) {
        return true;
      }
      return (
        !description ||
        !selectedAreaLocation ||
        !selectedCategory ||
        !selectedItemCondition ||
        selectedMedia.mediaUrls.length === 0
      );
    },
    getCategory() {
      return this.selectedCategory;
    },
    isPriceZero() {
      return this.deliveryTypeAndShippingCharge.price === 0;
    },
    submitLabel() {
      if (this.selectedMedia.inProgress) {
        return "圖片處理中";
      }
      return this.isEdit ? "修改" : "發佈";
    },
  },
  data() {
    return {
      id: undefined,
      deliveryTypeAndShippingCharge: { price: 0 },
      description: undefined,
      isEdit: false,
      loading: false,
      selectedAreaLocation: undefined,
      selectedCategory: undefined,
      selectedItemCondition: undefined,
      selectedMedia: { inProgress: false, mediaUrls: [] },
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
        const serviceExecute = this.isEdit ? UPDATE_ITEM : CREATE_ITEM;
        const successToastText = this.isEdit ? "更新成功" : "創建成功";
        const { price } = this.deliveryTypeAndShippingCharge;
        const requestBody = {
          availableDeliveryTypes: [ITEM_DELIVERY_TYPE_FACE_TO_FACE.key],
          category: { id: this.selectedCategory.id },
          description: this.description,
          id: this.id,
          images: this.selectedMedia.mediaUrls,
          itemCondition: this.selectedItemCondition,
          itemLocation: this.selectedAreaLocation,
          itemShippingInfo: {
            fixedShippingCharge: 0,
          },
          price,
          subCategory: { id: this.selectedSubCategory.id },
        };
        this.execute(serviceExecute(requestBody)).then((response) => {
          uni.showToast({ title: successToastText });
          setTimeout(() => {
            uni.redirectTo({ url: ITEM_DETAIL_PAGE(response).url });
          }, 1000);
        });
      } finally {
        this.loading = false;
      }
    },
    onConfirmDeliveryTypeAndShippingCharge(values) {
      this.deliveryTypeAndShippingCharge = values;
      this.showCostInput = false;
    },
    onToggleCostInput() {
      this.showCostInput = !this.showCostInput;
    },
    setEditItem(item) {
      this.isEdit = true;
      this.description = item.description;
      this.id = item.id;
      this.selectedMedia = { inProgress: false, mediaUrls: item.images };
      this.selectedItemCondition = item.itemCondition;
      this.selectedAreaLocation = item.itemLocation;
      this.selectedCategory = item.category;
      this.selectedSubCategory = item.subCategory;
      this.deliveryTypeAndShippingCharge = {
        price: item.price,
      };
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