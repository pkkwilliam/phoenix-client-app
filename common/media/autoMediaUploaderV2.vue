<template>
  <u-upload
    action="https://up-na0.qiniup.com"
    multiple
    ref="uUpload"
    upload-text="選擇圖片"
    :auto-upload="true"
    :before-upload="beforeUpload"
    :fileList="fileList"
    :form-data="formData"
    :maxCount="maxCount"
    :size-type="['compressed']"
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
  computed: {
    fileList() {
      return this.value.map((image) => ({ url: image }));
    },
  },
  data() {
    return { formData: { token: undefined } };
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
    onSuccess(data, index, lists, name) {
      console.log("onSuccess");
      const mediaUrls = lists.map((media) => {
        if (media.response) {
          const { accessUrl, key } = media.response;
          return accessUrl + "/" + key;
        } else {
          return media.url;
        }
      });

      console.log(mediaUrls);
      this.$refs.uUpload.clear();
      this.$emit("input", mediaUrls);
    },
    async onUploaded(list, name) {
      console.log("onUploaded");
    },
    async onRemove(index, list, name) {
      console.log("onRemove");
      // it will cause error if image upload too quick
      await new Promise((resolve) => setTimeout(() => resolve(), 500));
      const mediaAccessUrl = list.map((media) => media.url);
      console.log(mediaAccessUrl);
      this.$emit("input", mediaAccessUrl);
    },
  },
  mounted() {
    this.beforeUpload();
  },
  props: {
    value: {
      default: () => [],
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