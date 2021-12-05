<template>
  <view>
    <u-waterfall v-model="content">
      <template v-slot:left="{ leftList }">
        <view
          class="container left-container"
          v-for="(item, index) in leftList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <seller-profile-mini
              class="seller-container"
              :user="item.createBy"
            />
          </view>
        </view>
      </template>
      <template v-slot:right="{ rightList }">
        <view
          class="container right-container"
          v-for="(item, index) in rightList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <seller-profile-mini
              class="seller-container"
              :user="item.createBy"
            />
          </view>
        </view>
      </template>
    </u-waterfall>
  </view>
</template>

<script>
import item from "./item/item.vue";
import { ITEM_DETAIL_PAGE } from "../route/applicationRoute";
import sellerProfileMini from "./sellerProfileMini.vue";
export default {
  components: { item, sellerProfileMini },
  computed: {},
  data() {
    return { content: [], pageRequest: 0, pageSize: 20 };
  },
  methods: {
    onClickItem(item) {
      uni.navigateTo({ url: ITEM_DETAIL_PAGE(item).url });
    },
  },
  mounted() {
    const { execute, pageRequest, pageSize, serviceRequest } = this;
    execute(serviceRequest(pageRequest, pageSize)).then(
      (paginationResponse) => {
        const { content, totalElements, totalPages } = paginationResponse;
        this.content = content;
      }
    );
  },
  props: {
    serviceRequest: {
      default: (pageRequest, pageSize) => {
        console.log("please pass serviceRequest function props");
      },
      type: Function,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 20rpx;
}
.left-container {
  margin-right: 10rpx;
}
.right-container {
  margin-left: 10rpx;
}
.seller-container {
  margin-top: 15rpx;
}
</style>