<template>
  <view class="flex-end-container" v-if="isSelf">
    <view class="column-container medium-margin-right-spacer" v-if="isSelf">
      <view class="chat-bubble self">
        <text class="text">{{ chatMessage.content }}</text>
      </view>
    </view>
    <view>
      <image class="image" :src="currentUser.imageUrl" />
    </view>
  </view>
  <view class="row-container" v-else>
    <view>
      <image class="image" :src="chatWith.imageUrl" />
    </view>
    <view class="column-container medium-margin-left-spacer">
      <text class="h5 secondary">{{ chatWith.nickname }}</text>
      <view class="chat-bubble other">
        <text class="text">{{ chatMessage.content }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.userProfile.profile;
    },
    isSelf() {
      return (
        this.$store.state.userProfile?.profile?.sid ===
        this.chatMessage.createBy?.sid
      );
    },
  },
  props: {
    chatMessage: Object,
    chatWith: Object,
  },
};
</script>

<style lang="scss" scoped>
.image {
  border-radius: 100px;
  height: 68rpx;
  width: 68rpx;
}
.chat-bubble {
  border-radius: 18rpx;
  padding: 18rpx;
  // this need to fix using dynamic!!!
  max-width: 450rpx;
}
.other {
  background: white;
  width: fit-content;
}
.self {
  background: $u-phoenix-primary;
}
.text {
  // word-break: break-all;
  word-wrap: break-word;
}
</style>