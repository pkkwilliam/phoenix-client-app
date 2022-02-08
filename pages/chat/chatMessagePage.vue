<template>
  <view class="sticky-bottom-container-padding">
    <view class="container">
      <chat-content
        class="medium-margin-top-spacer"
        v-for="(chatMessage, index) in chatMessages"
        :chatMessage="chatMessage"
        :chatWith="chatWith"
        :key="index"
      />
    </view>
    <view class="cu-bar foot chat-text-field full-width">
      <chat-text-field :toUserSid="toUserSid" />
    </view>
  </view>
</template>

<script>
import ChatContent from "../../common/chat/chatContent.vue";
import chatTextField from "../../common/chat/chatTextField.vue";
import { getRouterJsonParam } from "../../route/applicationRoute";
import { onChatWithMessageRead, startWebsocket } from "../../util/chatUtil";
export default {
  components: { chatTextField, ChatContent },
  computed: {
    chatMessages() {
      return this.$store.state.chat.content[this.toUserSid]?.messages ?? [];
    },
    chatWith() {
      return this.$store.state.chat.content[this.toUserSid].chatWith;
    },
  },
  data() {
    return { toUserSid: {} };
  },
  methods: {
    userMessageReceived() {
      // this.execute(UPDATE_OPPOSITE_USER_CHAT_MESSAGE_RECEIVED(this.toUserSid));
      onChatWithMessageRead(this.execute, this.$store, this.toUserSid);
    },
  },
  onLoad(options) {
    this.$appStateService.getUserProfile();
    const toUserSid = getRouterJsonParam(options, "toUserSid");
    this.toUserSid = toUserSid;
    startWebsocket(this.execute, this.$store);
    this.userMessageReceived();
  },
};
</script>

<style lang="scss" scoped>
.chat-text-field {
  background: white;
  padding: 20rpx;
}
</style>