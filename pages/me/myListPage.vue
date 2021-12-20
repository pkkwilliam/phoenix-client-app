<template>
  <view class="container">
    <pagination-item-display
      ref="paginationItemDisplayRef"
      :serviceRequest="getCreatedItemServiceRequest"
    >
      <template v-slot:content="{ data }">
        <view class="user-created-item-container">
          <user-created-item :item="data" />
        </view>
      </template>
    </pagination-item-display>
  </view>
</template>

<script>
import userCreatedItem from "../../common/item/userCreatedItem.vue";
import paginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import { GET_CREATED_ITEMS } from "../../service/service";
export default {
  components: { paginationItemDisplay, userCreatedItem },
  methods: {
    getCreatedItemServiceRequest(pageRequest, pageSize) {
      return GET_CREATED_ITEMS(pageRequest, pageSize);
    },
  },
  mounted() {},
  onReachBottom() {
    this.$refs.paginationItemDisplayRef.getServiceResponse();
  },
};
</script>

<style lang="scss" scoped>
.user-created-item-container {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20rpx;
  margin-top: 20rpx;
}
</style>