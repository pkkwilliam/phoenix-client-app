<template>
  <view class="container">
    <search-bar @search="onClickSearch" />
    <view class="medium-margin-top-spacer">
      <u-waterfall v-model="flowList" ref="uWaterfall">
        <template v-slot:left="{ leftList }">
          <view v-for="(item, index) in leftList" :key="index">
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
          <view v-for="(item, index) in rightList" :key="index">
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
  </view>
</template>

<script>
import Item from "../../common/item/item.vue";
import UserCardMini from "../../common/user/userCardMini.vue";
import searchBar from "../../components/searchBar.vue";
import { GET_ITEMS_BY_DESCRIPTION_LIKE } from "../../service/service";
export default {
  components: { searchBar, Item, UserCardMini },
  data() {
    return { flowList: [], value: undefined };
  },
  methods: {
    async getItemsByDescriptionLike(pageRequest, pageSize) {
      const itemResult = await this.execute(
        GET_ITEMS_BY_DESCRIPTION_LIKE(this.value, pageRequest, pageSize)
      );
      this.flowList = itemResult.content;
    },
    onClickSearch(value) {
      this.$refs.uWaterfall.clear();
      this.value = value;
      this.getItemsByDescriptionLike(0, 20);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
</style>