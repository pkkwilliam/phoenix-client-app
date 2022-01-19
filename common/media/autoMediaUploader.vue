<template>
  <u-upload
    multiple
    :fileList="fileList"
    upload-text="選擇圖片"
    :auto-upload="false"
    :size-type="['compressed']"
    :maxCount="maxCount"
    @on-choose-complete="onChooseComplete"
    @on-remove="onRemove"
  />
</template>


<script>
import { uploadMedia } from "../../util/uploadMediaUtil";
/**
 * @onChangeMedia(list) => list of current media
 */
import uUpload from "../../uview-ui/components/u-upload/u-upload.vue";
export default {
  components: { uUpload },
  computed: {
    fileList() {
      return this.value.map((image) => ({ url: image }));
    },
  },
  methods: {
    async onChooseComplete(list, name) {
      console.log("add media", list);
      const mediaUrls = [];
      list.forEach(async (media) => {
        // media with file means its not yet uploaded
        if (media.file) {
          const { mediaAccessUrl } = await uploadMedia(media.url, this.execute);
          console.log("receive mediaAccessUrl:", mediaAccessUrl);
          mediaUrls.push(mediaAccessUrl);
          
        } else if (!mediaUrls.includes(media.url)) {
          mediaUrls.push(media.url);
        }
        console.log(mediaUrls);
      });
      this.$emit("input", mediaUrls);
    },
    onRemove(index, list, name) {
      console.log("remove media");
      this.$emit("input", list);
    },
  },
  props: {
    value: {
      default: [],
      type: Array,
    },
    maxCount: {
      default: 6,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>