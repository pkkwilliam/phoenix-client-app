<template>
  <view>
    <u-tabs
      :active-color="$styles.black"
      :bg-color="$styles.backgroundColor"
      :current="current"
      :inactive-color="$styles.secondary"
      :is-scroll="true"
      :list="categories"
      @change="change"
    />
  </view>
</template>

<script>
export const ON_CHANGE_CATEGORY_EMIT = "ON_CHANGE_CATEGORY_EMIT";
export default {
  computed: {
    categories() {
      return this.$store.state.category.content.map((category) => ({
        name: category.chineseName,
      }));
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    change(index) {
      this.current = index;
      this.$emit("onChangeCategory", this.$store.state.category.content[index]);
    },
  },
  mounted() {
    this.$appStateService.getCategory();
  },
};
</script>

<style lang="scss" scoped>
</style>