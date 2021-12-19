<template>
  <view>
    <u-waterfall v-model="dataList" ref="uWaterfall">
      <template v-slot:left="{ leftList }">
        <view
          class="left-container large-margin-bottom-spacer"
          v-for="(item, index) in leftList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <user-card-mini
              v-if="showSeller"
              class="small-margin-top-spacer"
              :clickable="false"
              :showRightArrowIcon="false"
              :user="item.createBy"
            />
          </view>
        </view>
      </template>
      <template v-slot:right="{ rightList }">
        <view
          class="right-container large-margin-bottom-spacer"
          v-for="(item, index) in rightList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <user-card-mini
              v-if="showSeller"
              class="small-margin-top-spacer"
              :clickable="false"
              :showRightArrowIcon="false"
              :user="item.createBy"
            />
          </view>
        </view>
      </template>
    </u-waterfall>
  </view>
</template>

<script>
import { ITEM_DETAIL_PAGE } from "../../route/applicationRoute";
import Item from "../item/item.vue";
import UserCardMini from "../user/userCardMini.vue";
export default {
  components: { Item, UserCardMini },
  computed: {},
  data() {
    return {
      currentPage: 0,
      dataList: [],
      totalElement: 0,
      totalPage: 0,
    };
  },
  methods: {
    clear() {
      this.$refs.uWaterfall.clear();
      this.currentPage = 0;
      this.totalElement = 0;
      this.totalPage = 0;
    },
    getServiceResponse() {
      this.execute(
        this.serviceRequest(this.currentPage, this.requestSize)
      ).then((response) => {
        const { content, totalPage, totalElement } = response;
        this.currentPage += 1;
        this.totalPage = totalPage;
        this.totalElement = totalElement;
        // crazy water fall that only allow push
        for (let index = 0; index < content.length; index++) {
          this.dataList.push(content[index]);
        }
      });
    },
    onClickItem(item) {
      uni.navigateTo({ url: ITEM_DETAIL_PAGE(item).url });
    },
  },
  mounted() {
    if (this.requestUponMounted) {
      this.getServiceResponse();
    }
  },
  props: {
    requestSize: {
      default: 10,
      type: Number,
    },
    requestUponMounted: {
      default: true,
      type: Boolean,
    },
    serviceRequest: Function,
    showSeller: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.left-container {
  margin-right: 10rpx;
}
.right-container {
  margin-left: 10rpx;
}
</style>