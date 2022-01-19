<template>
  <view>
    <u-tag
      class="u-scroll-view-item tag"
      shape="circle"
      v-for="(itemLocation, index) in itemLocations"
      :key="index"
      :text="itemLocation"
      :type="itemLocation === value ? 'warning' : 'info'"
      @click="onSelectAreaLocation(index)"
    />
  </view>
</template>

<script>
export default {
  computed: {
    itemLocations() {
      return ["澳門半島", "氹仔", "路環"];
    },
  },
  methods: {
    onSelectAreaLocation(index) {
      this.$emit("input", this.itemLocations[index]);
    },
  },
  props: {
    value: String,
  },
};
</script>

<style lang="scss" scoped>
.tag {
  margin-right: 8px;
}
</style>