<template>
  <view class="row-center-center-container">
    <view
      class="row-center-container"
      v-for="(step, index) in steps"
      :key="index"
    >
      <view :class="stepContainerStyle(step)">
        <view
          :class="
            step.length > 1 ? 'row-center-container' : 'column-center-container'
          "
          v-for="(subStep, subIndex) in step"
          :key="subIndex"
        >
          <u-icon
            custom-prefix="phoenix-custom-icon"
            :color="subStep.checked ? $styles.black : $styles.secondary"
            :name="subStep.checked ? 'check-fill' : 'uncheck'"
            :size="subStep.checked ? 56 : 48"
          />
          <text :class="subStep.checked ? 'black' : 'secondary'">
            {{ subStep.label }}
          </text>
        </view>
      </view>
      <text class="black" v-if="index < steps.length - 1">---</text>
    </view>
  </view>
</template>

<script>
export default {
  computed: {},
  methods: {
    stepContainerStyle(subSteps) {
      let subStepsChecked = true;
      for (let index = 0; index < subSteps.length; index++) {
        if (!subSteps[index].checked) {
          subStepsChecked = false;
        }
      }
      if (subSteps.length > 1) {
        return `step-container multiple-sub-steps-container ${
          subStepsChecked ? "sub-steps-checked" : "sub-steps-not-checked"
        }`;
      } else {
        return "step-container single-sub-step-container";
      }
    },
  },
  props: {
    steps: Array,
  },
};
</script>

<style lang="scss" scoped>
.step-container {
  margin-left: 20rpx;
  margin-right: 20rpx;
}
.multiple-sub-steps-container {
  border: solid;
  border-radius: 8px;
  border-width: 1px;
  padding: 10px;
}
.single-sub-step-container {
}
.sub-steps-checked {
}
.sub-steps-not-checked {
  border-color: $u-phoenix-light-grey;
}
</style>