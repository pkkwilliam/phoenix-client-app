<template>
  <view>
    <!-- <cu-custom bgColor="bg-gradual-blue" :isBack="false">
      <block slot="content">消息</block>
    </cu-custom> -->
    <application-navigation-bar title="消息" :isBack="false" />
    <u-empty text="消息列表為空" mode="message" v-if="userChats.length < 1" />
    <scroll-view>
      <view v-for="(userChat, index) in userChats" :key="index">
        <application-line-breaker v-if="index === 0" />
        <chat-user-row class="chat-user-row" :userChat="userChat" />
        <application-line-breaker />
      </view>
    </scroll-view>
  </view>
</template>

<script>
import chatUserRow from "../../common/chat/chatUserRow.vue";
import ApplicationNavigationBar from "../../common/navigation/applicationNavigationBar.vue";
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import { startWebsocket } from "../../util/chatUtil";
export default {
  components: { chatUserRow, ApplicationLineBreaker, ApplicationNavigationBar },
  computed: {
    isEmpty() {
      return true;
    },
    userChats() {
      return Object.values(this.$store.state.chat.content);
    },
  },
  props: {},
  mounted() {
    startWebsocket(this.execute, this.$store);
  },
};
</script>

<style lang="scss" scoped>
.chat-user-row {
  padding: 20rpx;
}
</style>