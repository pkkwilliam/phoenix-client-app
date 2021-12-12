<template>
  <view>
    <category-tap @onChangeCategory="onChangeCategory" />
    <u-waterfall ref="uWaterfall" v-model="items">
      <template v-slot:left="{ leftList }">
        <view
          class="container left-container"
          v-for="(item, index) in leftList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <user-card-mini
              class="seller-container"
              :showRightArrowIcon="false"
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
            <user-card-mini
              class="seller-container"
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
import item from "../../common/item/item.vue";
import { ITEM_DETAIL_PAGE } from "../../route/applicationRoute";
import CategoryTap from "../category/categoryTap.vue";
import { GET_ITEMS } from "../../service/service";
import UserCardMini from "../../common/user/userCardMini.vue";

export default {
  components: { item, CategoryTap, UserCardMini },
  computed: {
    dirty() {
      return this.$store.state.itemPagination.dirty;
    },
  },
  data() {
    return {
      currentPage: 0,
      items: [],
      selectedCategory: undefined,
      totolElement: 0,
      totalPage: 0,
    };
  },
  methods: {
    async getItems() {
      const { currentPage, selectedCategory } = this;
      const { content, totalPage, totalElement } = await this.execute(
        GET_ITEMS(currentPage, 8, selectedCategory?.id)
      );
      this.currentPage += 1;
      this.totalPage = totalPage;
      this.totalElement = totalElement;
      this.items = this.items.concat(content);
      this.onGetItemPaginationSuccess();
    },
    onGetItemPaginationSuccess() {
      this.$store.commit("setItemPaginationClean");
    },
    onChangeCategory(selectedCategory) {
      this.selectedCategory = selectedCategory;
      this.resetPagination();
    },
    onClickItem(item) {
      uni.navigateTo({ url: ITEM_DETAIL_PAGE(item).url });
    },
    resetPagination() {
      this.$refs.uWaterfall.clear();
      this.currentPage = 0;
      this.items = [];
      this.$refs.uWaterfall.clear();
      this.getItems();
    },
  },
  mounted() {
    this.getItems();
  },
  watch: {
    dirty(newDirty, oldDirty) {
      if (newDirty) {
        this.getItems();
      }
    },
    // items(newItems, oldItems) {
    //   if (newItems.length === 0) {
    //     this.$refs.uWaterfall.clear();
    //   } else {
    //     this.itemData = this.itemData.concat(newItems);
    //   }
    // },
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