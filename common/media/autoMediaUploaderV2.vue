<template>
  <u-upload
    action="https://up-na0.qiniup.com"
    multiple
    ref="uUpload"
    upload-text="選擇圖片"
    :auto-upload="true"
    :before-upload="beforeUpload"
    :form-data="formData"
    :fileList="fileList"
    :maxCount="maxCount"
    :size-type="['compressed']"
    :showUploadList="true"
    @on-choose-complete="onChooseComplete"
    @on-error="onErrorUpload"
    @on-remove="onRemove"
    @on-success="onSuccess"
    @on-uploaded="onUploaded"
  />
</template>


<script>
import { GET_IMAGE_UPLOAD_TOKEN } from "../../service/service";
import uUpload from "../../uview-ui/components/u-upload/u-upload.vue";
export default {
  components: { uUpload },
  computed: {},
  data() {
    return { fileList: [], formData: { token: undefined } };
  },
  methods: {
    onErrorUpload(res, index, lists, name) {
      console.log("error on upload");
    },
    async beforeUpload(index, list) {
      const { token, uploadUrl } = await this.execute(GET_IMAGE_UPLOAD_TOKEN());
      this.formData = {
        token,
      };
      console.log("upload token", this.formData.token);
      return resolve();
    },
    async onChooseComplete(list, name) {
      const emitBody = { ...this.value, inProgress: true };
      this.$emit("input", emitBody);
      await new Promise((resolve) => setTimeout(() => resolve(), 3000));
    },
    async onSuccess(data, index, list, name) {
      console.log("onSuccess", data, index, list, name);
      let inProgress = false;
      let mediaUrls = [];
      for (let index = 0; index < list.length; index++) {
        const currentMedia = list[index];
        if (currentMedia.progress !== 100) {
          inProgress = true;
        } else if (currentMedia.response) {
          const { accessUrl, key } = currentMedia.response;
          mediaUrls.push(accessUrl + "/" + key);
        } else {
          mediaUrls.push(currentMedia.url);
        }
      }
      console.log("finished uploaded", mediaUrls, inProgress);
      this.$emit("input", { mediaUrls, inProgress });
    },
    onUploaded(list, name) {
      console.log("onUploaded", list, name);
    },
    async onRemove(index, list, name) {
      console.log("onRemove");
      // it will cause error if image upload too quick
      await new Promise((resolve) => setTimeout(() => resolve(), 500));
      const mediaAccessUrl = list.map((media) => media.url);
      this.$emit("input", { ...this.value, mediaUrls: mediaAccessUrl });
    },
  },
  async mounted() {
    // this must be call or else the first upload image might fail
    this.beforeUpload();
    // should give sometime for it to pass in
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.fileList = this.initialMediaUrls.map((mediaUrl) => ({
      url: mediaUrl,
    }));
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
    initialMediaUrls: {
      default: [],
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>