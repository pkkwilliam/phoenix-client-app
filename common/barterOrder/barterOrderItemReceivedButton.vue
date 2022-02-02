<template>
  <primary-button label="確認收貨" v-if="show" @onClick="onClickItemReceived" />
</template>

<script>
import {
  BARTER_ROLE_OFFERER,
  BARTER_ROLE_RECEIVER,
} from "../../enum/barterRole";
import { UPDATE_BARTER_ORDER_RECEIVE } from "../../service/service";
import primaryButton from "../button/primaryButton.vue";
export default {
  components: { primaryButton },
  computed: {
    show() {
      const { barterRequest, offererReceived, receiverReceived } =
        this.barterOrder;
      if (
        barterRequest.barterRole === BARTER_ROLE_OFFERER.key &&
        !offererReceived
      ) {
        return true;
      }
      if (
        barterRequest.barterRole === BARTER_ROLE_RECEIVER.key &&
        !receiverReceived
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async onClickItemReceived() {
      const { id } = this.barterOrder;
      uni.showModal({
        content: "確認收貨?",
        cancelText: "取消",
        confirmText: "確定",
        success: async ({ confirm, cancel }) => {
          if (confirm) {
            this.execute(UPDATE_BARTER_ORDER_RECEIVE(id)).then((response) =>
              this.$emit("onBarterOrderUpdated", id)
            );
          }
        },
      });
    },
  },
  props: {
    barterOrder: {
      default: () => {},
      type: Object,
    },
  },
};
</script>