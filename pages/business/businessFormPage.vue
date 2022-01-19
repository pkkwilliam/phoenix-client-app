<template>
  <view class="business-form-container">
    <view class="card medium-margin-top-spacer">
      <view>
        <text class="h2 black bold">企業資料</text>
      </view>
      <application-line-breaker />
      <view class="medium-margin-top-spacer">
        <text class="h4 black bold">企業名稱</text>
        <u-input placeholder="請輸入企業名稱" v-model="name" />
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
        <auto-media-uploader-v-2
          v-model="businessRegistrationImageUrl"
          :maxCount="1"
        />
      </view>
    </view>
    <view class="card medium-margin-top-spacer">
      <view class="medium-margin-top-spacer">
        <text class="h2 black bold">法人資料</text>
      </view>
      <application-line-breaker />
      <view class="medium-margin-top-spacer">
        <text class="h4 black bold">姓名</text>
        <u-input placeholder="請輸入姓名" v-model="ownerName" />
      </view>
      <view class="medium-margin-top-spacer">
        <text class="h4 black bold">電話號碼</text>
        <view class="row-center-container">
          <view>
            <selectable-country-code v-model="ownerCountryCode" />
          </view>
          <view>
            <u-input
              class="textfield"
              placeholder="請輸入電話號碼"
              v-model="ownerPhoneNumber"
            />
          </view>
        </view>
      </view>
      <view class="medium-margin-top-spacer">
        <text class="h4 black bold">身份證編號</text>
        <u-input placeholder="請輸入法人身份證編號" v-model="ownerIdNumber" />
      </view>
      <view class="space-around-center-container medium-margin-top-spacer">
        <view>
          <text class="h4 black bold">身份證掃描（正面）</text>
          <auto-media-uploader-v-2
            v-model="ownerIdImageUrlFront"
            :maxCount="1"
          />
        </view>
        <view>
          <text class="h4 black bold">身份證掃描（背面）</text>
          <auto-media-uploader-v-2
            v-model="ownerIdImageUrlBack"
            :maxCount="1"
          />
        </view>
      </view>
    </view>
    <view class="medium-margin-top-spacer">
      <primary-button :disabled="disabledSubmitButton" @onClick="onClickSubmit">
        提交
      </primary-button>
    </view>
  </view>
</template>

<script>
import PrimaryButton from "../../common/button/primaryButton.vue";
import autoMediaUploader from "../../common/media/autoMediaUploader.vue";
import AutoMediaUploaderV2 from "../../common/media/autoMediaUploaderV2.vue";
import SelectableCountryCode from "../../common/phoneNumber/selectableCountryCode.vue";
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import { getRouterJsonParam } from "../../route/applicationRoute";
import { CREATE_BUSINESS, UPDATE_BUSINESS } from "../../service/service";
export default {
  components: {
    autoMediaUploader,
    ApplicationLineBreaker,
    SelectableCountryCode,
    PrimaryButton,
    AutoMediaUploaderV2,
  },
  computed: {
    disabledSubmitButton() {
      return (
        !this.businessRegistrationImageUrl ||
        !this.businessRegistrationNumber ||
        !this.name ||
        !this.ownerCountryCode ||
        !this.ownerIdNumber ||
        !this.ownerIdImageUrlBack ||
        !this.ownerIdImageUrlFront ||
        !this.ownerName ||
        !this.ownerPhoneNumber
      );
    },
  },
  data() {
    return {
      businessRegistrationImageUrl: undefined,
      businessRegistrationNumber: undefined,
      isEdit: false,
      name: undefined,
      ownerCountryCode: "853",
      ownerIdNumber: undefined,
      ownerIdImageUrlBack: undefined,
      ownerIdImageUrlFront: undefined,
      ownerName: undefined,
      ownerPhoneNumber: undefined,
    };
  },
  loaded(options) {
    const business = getRouterJsonParam(options, "business");
    if (business) {
      this.isEdit = true;
    }
  },
  methods: {
    onClickSubmit() {
      const executeFunction = this.isEdit ? UPDATE_BUSINESS : CREATE_BUSINESS;
      const requestBody = {
        businessRegistrationImageUrl: this.businessRegistrationImageUrl[0],
        businessRegistrationNumber: this.businessRegistrationNumber,
        name: this.name,
        ownerCountryCode: this.ownerCountryCode,
        ownerIdNumber: this.ownerIdNumber,
        ownerIdImageUrlBack: this.ownerIdImageUrlBack[0],
        ownerIdImageUrlFront: this.ownerIdImageUrlFront[0],
        ownerName: this.ownerName,
        ownerPhoneNumber: this.ownerPhoneNumber,
      };
      this.execute(executeFunction(requestBody)).then((response) => {
        this.$appStateService.getBusiness({ force: true });
        uni.navigateBack();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.business-form-container {
  padding-bottom: 20rpx;
  padding-left: 20rpx;
  padding-right: 20rpx;
}
</style>