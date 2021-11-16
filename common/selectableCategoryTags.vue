<template>
  <view>
    <u-tag
      class="tag"
      shape="circle"
      v-for="(category, index) in categories"
      :key="index"
      :text="category.chineseName"
      :type="currentSelectedIndex === index ? 'warning' : 'info'"
      @click="onSelectCategory(index)"
    />
  </view>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.category.content;
    },
  },
  data() {
    return {
      currentSelectedIndex: -1,
    };
  },
  methods: {
    onSelectCategory(index) {
      this.currentSelectedIndex = index;
      this.onSelect(this.categories[index]);
      this.$appStateService.getSubCategory(this.categories[index]);
    },
  },
  mounted() {
    this.$appStateService.getCategory();
  },
  props: {
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