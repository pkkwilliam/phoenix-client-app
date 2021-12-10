<template>
  <view class="container">
    <pagination-item-display
      displayType="list"
      :serviceRequest="getUserSaveItem"
    >
      <template v-slot:content="{ data }">
        <view class="user-created-item-container">
          <user-save-item :item="data.item" />
        </view>
      </template>
    </pagination-item-display>
  </view>
</template>

<script>
import UserSaveItem from "../../common/item/userSaveItem.vue";
import paginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import { GET_USER_VIEW_ITEM } from "../../service/service";
export default {
  components: { paginationItemDisplay, UserSaveItem },
  methods: {
    getUserSaveItem(pageRequest, pageSize) {
      return GET_USER_VIEW_ITEM(pageRequest, pageSize);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
.user-created-item-container {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20rpx;
  margin-top: 20rpx;
}
</style>