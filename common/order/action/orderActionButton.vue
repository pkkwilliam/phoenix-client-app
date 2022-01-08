<template>
  <primary-button
    class="button"
    v-if="action"
    :label="action.label"
    @onClick="onClickActionButton"
  />
</template>

<script>
import {
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_DELIVERY_PENDING,
  ORDER_STATUS_PAYMENT_PENDING,
  ORDER_STATUS_SHIPMENT_PENDING,
} from "../../../enum/orderStatus";
import {
  LANDING_TAB,
  ORDER_CONFIRM_PAGE,
} from "../../../route/applicationRoute";
import {
  UPDATE_ORDER_AS_DEIVERED_BY_BUYER,
  UPDATE_ORDER_AS_SHIPPED_BY_SELLER,
} from "../../../service/service";
import PrimaryButton from "../../button/primaryButton.vue";
export default {
  components: {
    PrimaryButton,
  },
  data() {
    return { action: undefined };
  },
  mounted() {
    const { order, type } = this;
    this.action =
      type == "buyer" ? this.buyerAction(order) : this.sellerAction(order);
  },
  methods: {
    buyerAction(order) {
      const { orderStatus } = order;
      if (orderStatus === ORDER_STATUS_PAYMENT_PENDING.key) {
        return { label: "去付款", execute: ORDER_CONFIRM_PAGE };
      } else if (orderStatus === ORDER_STATUS_DELIVERY_PENDING.key) {
        return {
          label: "確認收貨",
          modalConfirm: () =>
            this.execute(UPDATE_ORDER_AS_DEIVERED_BY_BUYER(this.order.id)),
          modalContent: "確認收貨後系統會自動把費用轉給賣家",
          modalTitle: "確認收貨",
        };
      } else if (orderStatus === ORDER_STATUS_DELIVERED.key) {
        return { label: "去評論", execute: LANDING_TAB };
      }
    },

    onClickActionButton() {
      const { modalConfirm, modalContent, modalTitle } = this.action;
      uni.showModal({
        cancelText: "取消",
        confirmText: "確定",
        content: modalContent,
        success: ({ confirm, cancel }) => {
          if (confirm) {
            modalConfirm().then((response) => {
              uni.showToast({
                title: modalTitle + "成功",
              });
              this.action = undefined;
              this.$emit("onOrderUpdate");
            });
          }
        },
        title: modalTitle,
      });
    },
    sellerAction(order) {
      const { orderStatus } = order;
      if (orderStatus === ORDER_STATUS_SHIPMENT_PENDING.key) {
        return {
          label: "確認發貨",
          modalConfirm: () =>
            this.execute(UPDATE_ORDER_AS_SHIPPED_BY_SELLER(this.order.id)),
          modalContent:
            "確認發貨後系統會提醒買家注意收貨，請確認物品是否已交給買家",
          modalTitle: "確認發貨",
        };
      } else if (orderStatus === ORDER_STATUS_DELIVERED.key) {
        return { label: "去評論", execute: LANDING_TAB };
      }
    },
  },
  props: {
    order: Object,
    type: {
      default: "buyer",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
}
</style>