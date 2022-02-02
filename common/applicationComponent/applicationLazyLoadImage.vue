<template>
  <view>
    <u-lazy-load
      :loading-img="loadingImage"
      :border-radius="borderRadius"
      :image="image"
      :imgMode="mode"
    />
  </view>
</template>

<script>
import image from "@/static/image-loading.png";
import uLazyLoad from "../../uview-ui/components/u-lazy-load/u-lazy-load.vue";
export default {
  components: { uLazyLoad },
  computed: {
    loadingImage() {
      return image;
    },
  },
  props: {
    borderRadius: {
      default: 8,
      type: Number,
    },
    image: String,
    mode: {
      default: "widthFix",
      type: String,
    },
  },
};
</script>