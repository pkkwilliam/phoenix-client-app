<template>
  <view>
    <u-tag
      class="u-scroll-view-item tag"
      shape="circle"
      v-for="(category, index) in categories"
      :key="index"
      :text="category.chineseName"
      :type="category.id === currentSelectValueId ? 'warning' : 'info'"
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
    currentSelectValueId() {
      return this.value?.id ?? 0;
    },
  },
  methods: {
    onSelectCategory(index) {
      const selectedCategory = this.categories[index];
      this.$appStateService.getSubCategory(selectedCategory);
      this.$emit("input", selectedCategory);
    },
  },
  mounted() {
    this.$appStateService.getCategory();
  },
  props: ["value"],
};
</script>

<style lang="scss" scoped>
.tag {
  margin-right: 8px;
}
</style>