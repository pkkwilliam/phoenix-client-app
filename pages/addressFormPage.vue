<template>
  <view class="container">
    <view class="textfield-container">
      <view class="section-container">
        <text class="label">收件人</text>
        <u-input class="textfield" v-model="address.contactName" />
      </view>
      <view class="section-container">
        <text class="label">區號</text>
        <u-input class="textfield" v-model="address.countryCode" />
      </view>
      <view class="section-container">
        <text class="label">電話號碼</text>
        <u-input class="textfield" v-model="address.phoneNumber" />
      </view>
      <view class="section-container">
        <text class="label">街道及門牌號</text>
        <u-input class="textfield" v-model="address.street" />
      </view>
      <view class="section-container">
        <text class="label">大廈及樓層</text>
        <u-input class="textfield" v-model="address.unit" />
      </view>
    </view>
    <view class="button-container">
      <u-button
        class="submit-button"
        shape="circle"
        type="success"
        :disabled="submitButtonDisabled"
        :loading="false"
        @click="onClickSubmit"
        >{{ submitButtonLabel }}
      </u-button>
      <text class="delete-button" @click="onClickDelete">删除</text>
    </view>
  </view>
</template>

<script>
import { getRouterJsonParam } from "../route/applicationRoute";
import {
  CREATE_ADDRESS,
  DELETE_ADDRESS,
  UPDATE_ADDRESS,
} from "../service/service";
export default {
  computed: {
    submitButtonDisabled() {
      const { contactName, countryCode, phoneNumber, street, unit } =
        this.address;
      return !countryCode || !countryCode, !phoneNumber, !street, !unit;
    },
    submitButtonLabel() {
      return this.isEdit ? "修改" : "創建";
    },
  },
  data() {
    return {
      address: {
        contactName: undefined,
        countryCode: undefined,
        phoneNumber: undefined,
        street: undefined,
        unit: undefined,
      },
      isEdit: false,
    };
  },
  methods: {
    async createAddress() {
      await this.execute(CREATE_ADDRESS(this.address));
      await this.$appStateService.getAddress({ force: true });
      uni.navigateBack();
    },
    async updateAddress() {
      await this.execute(UPDATE_ADDRESS(this.address));
      await this.$appStateService.getAddress({ force: true });
      uni.navigateBack();
    },
    async onClickDelete() {
      await this.execute(DELETE_ADDRESS(this.address));
      await this.$appStateService.getAddress({ force: true });
      uni.navigateBack();
    },
    onClickSubmit() {
      if (this.isEdit) {
        this.updateAddress();
      } else {
        this.createAddress();
      }
    },
  },
  onLoad(option) {
    const routerAddressParam = getRouterJsonParam(option, "address");
    if (routerAddressParam) {
      this.isEdit = true;
      this.address = routerAddressParam;
    }
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  align-items: center;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-left: 20rpx;
  padding-right: 20rpx;
  width: 100%;
  .delete-button {
    color: $u-phoenix-light-grey;
    margin-top: 20rpx;
  }
  .submit-button {
    width: 100%;
  }
}
.textfield-container {
  padding-left: 20rpx;
  padding-right: 20rpx;
  .section-container {
    margin-top: 20rpx;
    .label {
      font-weight: 600;
    }
    .textfield {
      margin-top: 15rpx;
    }
  }
}
</style>