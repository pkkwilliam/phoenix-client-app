<template>
  <view>
    <u-tag
      class="tag"
      shape="circle"
      v-for="(subCategory, index) in subCategories"
      :key="index"
      :text="subCategory.chineseName"
      :type="currentSelectedIndex === index ? 'warning' : 'info'"
      @click="onSelectSubCategory(index)"
    />
  </view>
</template>

<script>
export default {
  computed: {
    subCategories() {
      if (this.category) {
        return this.$store.state.subCategory.content[this.category];
      }
      return [];
    },
  },
  data() {
    return {
      currentSelectedIndex: -1,
    };
  },
  methods: {
    onSelectSubCategory(index) {
      this.currentSelectedIndex = index;
      this.onSelect(this.subCategories[index]);
    },
  },
  props: {
    category: {
      type: Object,
    },
    onSelect: {
      default: () => {},
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