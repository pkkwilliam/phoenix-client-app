<template>
  <view class="column-center-container" @click="onClickSaveItem">
    <u-icon name="home" :size="40"> </u-icon>
    <text>收藏</text>
  </view>
</template>

<script>
import {
  CREATE_USER_SAVE_ITEM,
  DELETE_USER_SAVE_ITEM,
  GET_USER_SAVE_ITEM_BY_ITEM_ID,
} from "../../service/service";
export default {
  computed: {
    saved() {
      return this.userSaveItem !== undefined;
    },
  },
  data() {
    return { userSaveItem: undefined };
  },
  methods: {
    getSaveStatus() {
      this.execute(GET_USER_SAVE_ITEM_BY_ITEM_ID(this.item.id)).then(
        (response) => (this.userSaveItem = response ? response : undefined)
      );
    },
    onClickSaveItem() {
      if (this.saved) {
        this.execute(DELETE_USER_SAVE_ITEM(this.item.id)).then((response) => {
          this.userSaveItem = undefined;
          this.onSuccess("取消收藏");
        });
      } else {
        this.execute(CREATE_USER_SAVE_ITEM(this.item.id)).then((response) => {
          this.userSaveItem = response;
          this.onSuccess("收藏成功");
        });
      }
    },
    onSuccess(toastLabel) {
      uni.showToast({
        title: toastLabel,
      });
    },
  },
  mounted() {
    this.getSaveStatus();
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>