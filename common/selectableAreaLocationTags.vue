<template>
  <view>
    <u-tag
      class="tag"
      shape="circle"
      v-for="(itemLocation, index) in itemLocations"
      :key="index"
      :text="itemLocation"
      :type="currentSelectedIndex === index ? 'warning' : 'info'"
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
  data() {
    return { currentSelectedIndex: -1 };
  },
  methods: {
    onSelectAreaLocation(index) {
      this.currentSelectedIndex = index;
      this.onSelect(this.itemLocations[index]);
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