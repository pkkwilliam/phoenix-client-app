<template>
  <view>
    <view v-for="(data, index) in dataList" :key="index">
      <slot name="content" :data="data" />
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      currentPage: 0,
      dataList: [],
      totalElement: 0,
      totalPage: 0,
    };
  },
  methods: {
    getServiceResponse() {
      this.execute(
        this.serviceRequest(this.currentPage, this.requestSize)
      ).then((response) => {
        const { content, totalPage, totalElement } = response;
        this.currentPage += 1;
        this.totalPage = totalPage;
        this.totalElement = totalElement;
        this.dataList = this.dataList.concat(content);
      });
    },
  },
  mounted() {
    if (this.requestUponMounted) {
      this.getServiceResponse();
    }
  },
  props: {
    requestSize: {
      default: 10,
      type: Number,
    },
    requestUponMounted: {
      default: true,
      type: Boolean,
    },
    serviceRequest: Function,
  },
};
</script>

<style lang="scss" scoped>
</style>