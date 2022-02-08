<template>
  <view class="row-center-container full-width">
    <u-input v-model="text" :clearable="false" :customStyle="inputStyle" />
    <u-button
      class="medium-margin-left-spacer"
      size="mini"
      type="success"
      @click="onClickSubmit"
      >發送
    </u-button>
  </view>
</template>

<script>
import { CREATE_CHAT_MESSAGE } from "../../service/service";
import uButton from "../../uview-ui/components/u-button/u-button.vue";
import { MESSAGE_CONTENT_MESSAGE_STRING } from "../../enum/messageContent";
import { MESSAGE_TYPE_PRIVATE } from "../../enum/messageType";
import { updateMessages } from "../../util/chatUtil";
export default {
  components: { uButton },
  computed: {
    inputStyle() {
      return {
        "background-color": "#f6f6f6",
        "border-radius": "8px",
        "padding-left": "8px",
      };
    },
  },
  data() {
    return { text: undefined };
  },
  methods: {
    async onClickSubmit() {
      const requestBody = {
        content: this.text,
        messageContent: MESSAGE_CONTENT_MESSAGE_STRING.key,
        messageType: MESSAGE_TYPE_PRIVATE.key,
      };
      this.text = undefined;
      const response = await this.execute(
        CREATE_CHAT_MESSAGE(this.toUserSid, requestBody)
      );
      updateMessages(this.$store, [response]);
    },
  },
  props: {
    toUserSid: String,
  },
};
</script>