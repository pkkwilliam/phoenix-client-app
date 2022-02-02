<template>
  <view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">大頭帖</text>
      <auto-media-uploader-v-2
        v-model="avatar"
        :initialMediaUrls="avatar.mediaUrls"
        :maxCount="1"
      />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">暱稱</text>
      <u-input placeholder="請輸入暱稱" v-model="nickname" />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">個性簽名</text>
      <u-input placeholder="請輸入個性簽名" v-model="description" />
    </view>
    <view class="medium-margin-top-spacer">
      <primary-button
        :disabled="disableSubmitButton"
        :loading="loading"
        @onClick="onClickSubmit"
      />
    </view>
  </view>
</template>

<script>
import PrimaryButton from "../../common/button/primaryButton.vue";
import autoMediaUploaderV2 from "../../common/media/autoMediaUploaderV2.vue";
import { UPDATE_USER_PROFILE } from "../../service/service";
export default {
  components: { autoMediaUploaderV2, PrimaryButton },
  computed: {
    disableSubmitButton() {
      return this.avatar.inProgress;
    },
  },
  data() {
    return {
      description: undefined,
      avatar: { mediaUrls: [], inProgress: false },
      loading: false,
      nickname: undefined,
    };
  },
  methods: {
    async onClickSubmit() {
      this.loading = true;
      try {
        const requestBody = {
          description: this.description,
          gender: "MALE",
          imageUrl: this.avatar.mediaUrls[0],
          name: this.name,
          nickname: this.nickname,
        };
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));
        await this.execute(UPDATE_USER_PROFILE(requestBody));
        uni.showToast({
          title: "儲存成功",
        });
        this.$appStateService.getUserProfile({ force: true });
        uni.navigateBack();
      } finally {
        this.loading = false;
      }
    },
  },
  async mounted() {
    await this.$appStateService.getUserProfile();
    const { description, imageUrl, nickname } =
      this.$store.state.userProfile.profile;
    this.avatar = {
      mediaUrls: [imageUrl],
      inProgress: false,
    };
    this.description = description;
    this.nickname = nickname;
  },
};
</script>

<style lang="scss" scoped>
</style>