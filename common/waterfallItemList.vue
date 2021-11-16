<template>
  <view>
    <u-waterfall v-model="flowList">
      <template v-slot:left="{ leftList }">
        <view v-for="(item, index) in leftList" :key="index">
          <!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
        </view>
      </template>
      <template v-slot:right="{ rightList }">
        <view v-for="(item, index) in rightList" :key="index">
          <!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
        </view>
      </template>
    </u-waterfall>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
</style>