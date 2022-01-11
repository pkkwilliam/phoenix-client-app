<template>
  <view class="business-form-container">
    <view class="medium-margin-top-spacer">
      <text class="h2 black bold">企業資料</text>
    </view>
    <application-line-breaker />
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">企業名稱</text>
      <u-input placeholder="請輸入企業名稱" v-model="beneficialName" />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">商業登記編號</text>
      <u-input
        placeholder="請輸入商業登記編號"
        v-model="businessRegistrationNumber"
      />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">商業登記首頁掃描</text>
      <auto-media-uploader
        v-model="businessRegistrationImageUrl"
        :maxCount="1"
      />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h2 black bold">法人資料</text>
    </view>
    <application-line-breaker />
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">法人名字</text>
      <u-input placeholder="請輸入法人名字" v-model="ownerName" />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">法人身份證編號</text>
      <u-input placeholder="請輸入法人身份證編號" v-model="ownerIdNumber" />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">法人身份證（正面）</text>
      <auto-media-uploader
        v-model="businessRegistrationImageUrl"
        :maxCount="1"
      />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">法人身份證（背面）</text>
      <auto-media-uploader
        v-model="businessRegistrationImageUrl"
        :maxCount="1"
      />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">區號</text>
      <!-- <u-input
        class="textfield"
        placeholder="請輸入區號"
        v-model="countryCode"
      /> -->
      <selectable-country-code />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">電話號碼</text>
      <u-input
        class="textfield"
        placeholder="請輸入電話號碼"
        v-model="phoneNumber"
      />
    </view>
  </view>
</template>

<script>
import autoMediaUploader from "../../common/media/autoMediaUploader.vue";
import SelectableCountryCode from "../../common/phoneNumber/selectableCountryCode.vue";
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
export default {
  components: {
    autoMediaUploader,
    ApplicationLineBreaker,
    SelectableCountryCode,
  },
  data() {
    return {
      businessRegistrationImageUrl: undefined,
      businessRegistrationNumber: undefined,
      countryCode: undefined,
      name: undefined,
      phoneNumber: undefined,
      ownerIdNumber: undefined,
      ownerIdImageUrlBack: undefined,
      ownerIdImageUrlFront: undefined,
      ownerName: undefined,
    };
  },
};
</script>

<style lang="scss" scoped>
.business-form-container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
</style>