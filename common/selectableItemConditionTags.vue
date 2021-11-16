<template>
  <view>
    <u-tag
      class="tag"
      shape="circle"
      v-for="(itemCondition, index) in itemConditions"
      :key="index"
      :text="itemCondition.label"
      :type="currentSelectedIndex === index ? 'warning' : 'info'"
      @click="onSelectItemConditon(index)"
    />
  </view>
</template>

<script>
import {
  ITEM_CONDITION_ACCEPTABLE,
  ITEM_CONDITION_DEFECT,
  ITEM_CONDITION_GOOD,
  ITEM_CONDITION_LIKE_NEW,
  ITEM_CONDITION_NEW,
} from "./itemCondition";

export default {
  computed: {
    itemConditions() {
      return [
        ITEM_CONDITION_NEW,
        ITEM_CONDITION_LIKE_NEW,
        ITEM_CONDITION_GOOD,
        ITEM_CONDITION_ACCEPTABLE,
        ITEM_CONDITION_DEFECT,
      ];
    },
  },
  data() {
    return { currentSelectedIndex: -1 };
  },
  methods: {
    onSelectItemConditon(index) {
      this.currentSelectedIndex = index;
      this.onSelect(this.itemConditions[index]);
    },
  },
  props: {
    onSelect: {
      default: (selectedItem) => {},
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  margin-right: 8px;
}
</style>