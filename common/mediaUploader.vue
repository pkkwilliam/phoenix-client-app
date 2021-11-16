<template>
  <u-upload
    multiple
    upload-text="選擇圖片"
    :auto-upload="false"
    :size-type="['compressed']"
    :maxCount="9"
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