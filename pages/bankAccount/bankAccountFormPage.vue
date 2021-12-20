<template>
  <view>
    <view class="card container">
      <view class="medium-margin-top-spacer">
        <text class="h4 black bold">收款人</text>
        <u-input placeholder="請輸入收款人名字" v-model="beneficialName" />
      </view>
      <view class="medium-margin-top-spacer">
        <text class="h4 black bold">銀行</text>
        <drop-down-selectable-bank :bank="bank" @onSelect="onSelectBank" />
      </view>
      <view class="medium-margin-top-spacer">
        <text class="h4 black bold">銀行賬戶</text>
        <u-input
          placeholder="請輸入收款銀行賬戶"
          v-model="beneficialAccountNumber"
        />
      </view>
    </view>
    <view>
      <view class="cu-bar foot column-center-container container">
        <u-button
          class="submit-button"
          shape="circle"
          type="primary"
          :disabled="submitButtonDisabled"
          :loading="false"
          @click="onClickSubmit"
          >{{ submitButtonLabel }}
        </u-button>
        <view class="medium-margin-top-spacer" v-if="isEdit">
          <text class="secondary" @click="onClickDelete"> 删除 </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import dropDownSelectableBank from "../../common/bank/dropdownSelectableBank.vue";
import { getRouterJsonParam } from "../../route/applicationRoute";
import {
  CREATE_BANK_ACCOUNT,
  DELETE_BANK_ACCOUNT,
  UPDATE_BANK_ACCOUNT,
} from "../../service/service";
export default {
  components: { dropDownSelectableBank },
  computed: {
    submitButtonDisabled() {
      const { bank, beneficialName, beneficialAccountNumber } = this;
      return !bank || !beneficialName || !beneficialAccountNumber;
    },
    submitButtonLabel() {
      return this.isEdit ? "修改" : "創建";
    },
  },
  data() {
    return {
      bank: undefined,
      beneficialName: undefined,
      beneficialAccountNumber: undefined,
      id: undefined,
      isEdit: false,
    };
  },
  methods: {
    async createBankAccount() {
      const { bank, beneficialName, beneficialAccountNumber } = this;
      await this.execute(
        CREATE_BANK_ACCOUNT({ bank, beneficialName, beneficialAccountNumber })
      );
      await this.$appStateService.getBankAccount({ force: true });
      uni.navigateBack();
    },
    async updateBankAccount() {
      const { bank, beneficialName, beneficialAccountNumber, id } = this;
      await this.execute(
        UPDATE_BANK_ACCOUNT({
          id,
          bank,
          beneficialName,
          beneficialAccountNumber,
        })
      );
      await this.$appStateService.getBankAccount({ force: true });
      uni.navigateBack();
    },
    onClickDelete() {
      const confirmFunction = async () => {
        const { id } = this;
        await this.execute(DELETE_BANK_ACCOUNT({ id }));
        await this.$appStateService.getBankAccount({ force: true });
        uni.navigateBack();
      };
      uni.showModal({
        content: "確定要刪除這個銀行賬戶嗎?",
        cancelText: "取消",
        confirmText: "確認",
        success: (res) => {
          if (res.confirm) {
            confirmFunction();
          }
        },
      });
    },
    onClickSubmit() {
      if (this.isEdit) {
        this.updateBankAccount();
      } else {
        this.createBankAccount();
      }
    },
    onSelectBank(bank) {
      this.bank = bank;
    },
  },
  onLoad(option) {
    const bankRouterParam = getRouterJsonParam(option, "bankAccount");
    if (bankRouterParam) {
      const { bank, beneficialName, beneficialAccountNumber, id } =
        bankRouterParam;
      this.isEdit = true;
      this.bank = bank;
      this.beneficialName = beneficialName;
      this.beneficialAccountNumber = beneficialAccountNumber;
      this.id = id;
    }
  },
};
</script>

<style lang="scss" scoped>
.submit-button {
  width: 100%;
}
</style>