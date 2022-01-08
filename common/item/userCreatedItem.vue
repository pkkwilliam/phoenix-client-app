<template>
  <view @click="onClickItem">
    <view class="space-between-center-container">
      <text class="h5 secondary">ID: {{ item.id }} {{ createDate }}</text>
      <view>
        <display-currency-fish-coin :value="item.price" />
      </view>
    </view>
    <view class="row-container medium-margin-top-spacer">
      <image class="image" mode="aspectFill" :src="coverImage" />
      <text class="h4 black lightly-bold description-text">{{
        description
      }}</text>
    </view>
    <view class="space-between-center-container medium-margin-top-spacer">
      <mpay-guarantee />
      <item-view-and-save-count
        :viewCount="item.viewCount"
        :saveCount="item.saveCount"
      />
    </view>
    <view class="end-center-container medium-margin-top-spacer">
      <u-button
        class="button edit"
        size="mini"
        shape="circle"
        type="primary"
        :plain="true"
        >修改</u-button
      >
      <u-button
        class="button"
        size="mini"
        shape="circle"
        type="error"
        :plain="true"
        @click="onClickDeleteItem"
        >删除
      </u-button>
    </view>
  </view>
</template>

<script>
import { ITEM_DETAIL_PAGE } from "../../route/applicationRoute";
import { DELETE_ITEM } from "../../service/service";
import { convertSystemDateToDisplayDateYear } from "../../util/dateUtil";
import DisplayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";
import MpayGuarantee from "../../components/guarantee/mpayGuarantee.vue";
import ItemViewAndSaveCount from "./itemViewAndSaveCount.vue";
export default {
  components: { MpayGuarantee, ItemViewAndSaveCount, DisplayCurrencyFishCoin },
  computed: {
    coverImage() {
      return this.item.images[0];
    },
    createDate() {
      const { createTime, updateTime } = this.item;
      const convertDate = updateTime ? updateTime : createTime;
      return convertSystemDateToDisplayDateYear(convertDate);
    },
    description() {
      return this.item.description.substring(0, 15);
    },
  },
  methods: {
    onClickDeleteItem() {
      const onClickConfirm = async () => {
        await this.execute(DELETE_ITEM(this.item.id));
        this.$emit("onItemDeleted");
      };
      uni.showModal({
        content: "删除此物品",
        cancelText: "取消",
        confirmText: "確定",
        success: ({ confirm, cancel }) => {
          if (confirm) {
            onClickConfirm();
          }
        },
      });
    },
    onClickItem() {
      uni.navigateTo({ url: ITEM_DETAIL_PAGE(this.item).url });
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0px 10rpx;
}
.image {
  border-radius: 8px;
  height: 185rpx;
  width: 185rpx;
}
.description-text {
  margin-left: 20rpx;
}
</style>