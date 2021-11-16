<template>
  <u-upload
    multiple
    upload-text="選擇圖片"
    :auto-upload="false"
    :size-type="['compressed']"
    :maxCount="9"
    @on-choose-complete="onChooseComplete"
  />
</template>

<script>
import uUpload from "../uview-ui/components/u-upload/u-upload.vue";
import { uploadMedia } from "../util/uploadMediaUtil";
export default {
  components: { uUpload },
  computed: {},
  methods: {
    onChooseComplete(event) {
      console.log(event.length);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>