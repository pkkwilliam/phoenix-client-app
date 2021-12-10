<template>
  <view>
    <u-tabs
      :active-color="activeColor"
      :bg-color="backgroundColor"
      :current="current"
      :inactive-color="inactiveColor"
      :is-scroll="true"
      :list="categories"
      @change="change"
    />
  </view>
</template>

<script>
export const ON_CHANGE_CATEGORY_EMIT = "ON_CHANGE_CATEGORY_EMIT";
import styles from "../../uview-ui/theme.scss";
export default {
  computed: {
    activeColor() {
      return styles.orange;
    },
    inactiveColor() {
      return styles.secondary;
    },
    backgroundColor() {
      return styles.backgroundColor;
    },
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