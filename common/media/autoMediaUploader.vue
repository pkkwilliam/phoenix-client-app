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
      return this.value.mediaUrls.map((media) => ({ url: media }));
    },
  },
  methods: {
    async onChooseComplete(list, name) {
      this.$emit("input", { ...this.value, inProgress: true });
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
      this.$emit("input", { ...this.value, mediaUrls, inProgress: false });
    },
    onRemove(index, list, name) {
      console.log("remove media");
      this.$emit("input", list);
    },
  },
  props: {
    value: {
      default: () => {},
      type: Object,
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