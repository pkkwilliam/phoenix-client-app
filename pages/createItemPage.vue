<template>
  <view class="container safearea-container">
    <view class="top-button-row view-container">
      <text>取消</text>
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
        :height="200"
      ></u-input>
    </view>
    <view class="view-container">
      <image-uploader />
    </view>
    <view class="view-container">
      <icon-sub-header
        iconName="map"
        label="物品所在地區"
        :onSelect="onSelectCategory"
      />
      <view class="sub-view-container">
        <scroll-view scroll-x="true">
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
      <icon-sub-header iconName="rmb" label="價格" />
    </view>
  </view>
</template>

<script>
import IconSubHeader from "../common/iconSubHeader.vue";
import ImageUploader from "../common/imageUploader.vue";
import PrimaryButton from "../common/primaryButton.vue";
import SelectableAreaLocationTags from "../common/selectableAreaLocationTags.vue";
import SelectableCategoryTags from "../common/selectableCategoryTags.vue";
import SelectableItemConditionTags from "../common/selectableItemConditionTags.vue";
import SelectableSubCategoryTags from "../common/selectableSubCategoryTags.vue";
import UButton from "../uview-ui/components/u-button/u-button.vue";
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
  },
  computed: {
    getCategory() {
      return this.selectedCategory;
    },
  },
  data() {
    return {
      selectedAreaLocation: undefined,
      selectedCategory: undefined,
      selectedItemCondition: undefined,
      selectedSubCategory: undefined,
    };
  },
  methods: {
    onClickSubmit() {
      const {
        selectedAreaLocation,
        selectedCategory,
        selectedItemCondition,
        selectedSubCategory,
      } = this;
      console.log(
        selectedAreaLocation,
        selectedCategory,
        selectedItemCondition,
        selectedSubCategory
      );
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
.container {
  margin: 20rpx;
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