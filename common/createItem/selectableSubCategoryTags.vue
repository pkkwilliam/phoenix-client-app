<template>
  <view>
    <u-tag
      class="u-scroll-view-item tag"
      shape="circle"
      v-for="(subCategory, index) in subCategories"
      :key="index"
      :text="subCategory.chineseName"
      :type="subCategory.id === currentSelectedId ? 'warning' : 'info'"
      @click="onSelectSubCategory(index)"
    />
  </view>
</template>

<script>
export default {
  computed: {
    currentSelectedId() {
      return this.value?.id ?? 0;
    },
    subCategories() {
      if (this.category) {
        return this.$store.state.subCategory.content[this.category];
      }
      return [];
    },
  },
  methods: {
    onSelectSubCategory(index) {
      const selectedSubCategory = this.subCategories[index];
      this.$emit("input", selectedSubCategory);
    },
  },
  props: {
    value: Object,
    category: Object,
  },
};
</script>

<style lang="scss" scoped>
.tag {
  margin-right: 8px;
}
</style>