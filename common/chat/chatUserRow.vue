<template>
  <view class="row-container" @click="onClick">
    <view class="image-container">
      <image class="image" :src="userChat.chatWith.imageUrl" />
      <text class="badge" v-if="hasUnreceived" />
    </view>
    <view class="name-container column-container medium-margin-left-spacer">
      <text class="h2 black">{{ userChat.chatWith.nickname }}</text>
      <text class="h3 secondary">{{ lastMessageContent }}</text>
    </view>
    <view>
      <text class="h4 secondary">{{ lastMessageTime }}</text>
    </view>
  </view>
</template>

<script>
import { CHAT_MESSAGE_PAGE } from "../../route/applicationRoute";
import { timeago } from "../../util/dateUtil";
const MAX_CONTENT_LENGTH = 18;
export default {
  computed: {
    hasUnreceived() {
      console.log(this.userChat.messages);
      const { received } = this.userLastMessage();
      return !received;
    },
    lastMessageContent() {
      const { content } = this.userLastMessage();
      if (content.length > MAX_CONTENT_LENGTH) {
        return content.substring(0, MAX_CONTENT_LENGTH) + "...";
      }
      return content;
    },
    lastMessageTime() {
      const { createTime } = this.userLastMessage();
      return timeago(createTime);
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({
        url: CHAT_MESSAGE_PAGE(this.userChat.chatWith.sid).url,
      });
    },
    userLastMessage() {
      return this.userChat.messages[this.userChat.messages.length - 1];
    },
  },
  props: {
    userChat: Object,
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  .badge {
    position: absolute;
    right: -1px;
    background: red;
    border-radius: 100px;
    padding: 5px;
    top: -1px;
  }
  .image {
    border-radius: 8px;
    height: 88rpx;
    width: 88rpx;
  }
}
.name-container {
  flex: 1;
}
</style>