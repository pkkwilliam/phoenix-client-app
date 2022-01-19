<template>
  <u-upload
    multiple
    :fileList="[
      {
        url: 'https://phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg',
      },
    ]"
    upload-text="選擇圖片"
    :auto-upload="false"
    :size-type="['compressed']"
    :maxCount="6"
    @on-choose-complete="onChooseComplete"
    @on-remove="onRemove"
  />
</template>


<script>
/**
 * @onChangeMedia(list) => list of current media
 */
import uUpload from "../uview-ui/components/u-upload/u-upload.vue";
export default {
  components: { uUpload },
  computed: {},
  methods: {
    onChooseComplete(list, name) {
      console.log("add media", list[0]);
      this.onChangeMedia(list);
    },
    onRemove(index, list, name) {
      console.log("remove media");
      this.onChangeMedia(list);
    },
  },
  props: {
    onChangeMedia: {
      default: () => console.log("please override onChangeMedia()"),
    },
    type: Function,
  },
};
</script>

<style lang="scss" scoped>
</style>