<template>
  <view class="container">
    <pagination-item-display
      ref="paginationItemDisplayRef"
      :serviceRequest="getCashOutPagination"
    >
      <template v-slot:content="{ data }">
        <view class="card medium-margin-top-spacer">
          <view class="space-between-container">
            <view class="column-container">
              <text class="h5 secondary">轉賬單號: {{ data.id }}</text>
            </view>
            <view>
              <text class="h5 orange" v-if="data.active">系統處理中</text>
              <text class="h5 green" v-else>已完成</text>
            </view>
          </view>
          <view class="column-container medium-margin-top-spacer">
            <view>
              <text class="h4 black bold">{{
                data.toBankAccount.beneficialName
              }}</text>
            </view>
            <view class="small-margin-top-spacer">
              <text class="h5">{{
                getBankLabelByKey(data.toBankAccount.bank)
              }}</text>
            </view>
            <view class="small-margin-top-spacer">
              <text class="h5">{{
                data.toBankAccount.beneficialAccountNumber
              }}</text>
            </view>
          </view>
          <view class="end-center-container medium-margin-top-spacer">
            <text class="h5">金額:</text>
            <display-currency-fish-coin
              :value="data.amount - data.commissionFee"
            />
          </view>
        </view>
      </template>
    </pagination-item-display>
  </view>
</template>

<script>
import DisplayCurrencyFishCoin from "../../common/displayCurrency/displayCurrencyFishCoin.vue";
import paginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import { getBankLabelByKey } from "../../enum/bank";
import { GET_CASH_OUT_PAGINATION } from "../../service/service";
import { convertSystemDateToDisplayDateTimeMinute } from "../../util/dateUtil";

export default {
  components: { paginationItemDisplay, DisplayCurrencyFishCoin },
  methods: {
    getCashOutPagination(pageRequest, pageSize) {
      return GET_CASH_OUT_PAGINATION(pageRequest, pageSize);
    },
    getBankLabelByKey(key) {
      return getBankLabelByKey(key);
    },
    transformCreateTime(date) {
      return convertSystemDateToDisplayDateTimeMinute(date);
    },
  },
  onReachBottom() {
    this.$refs.paginationItemDisplayRef.getServiceResponse();
  },
};
</script>

<style lang="scss" scoped>
</style>