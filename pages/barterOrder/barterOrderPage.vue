<template>
  <view class="container">
    <pagination-item-display
      ref="paginationItemDisplayRef"
      :serviceRequest="getBarterOrderServiceRequest"
    >
      <template v-slot:content="{ data }">
        <barter-order-item
          class="card medium-margin-top-spacer"
          :barterOrder="data"
        />
      </template>
    </pagination-item-display>
  </view>
</template>

<script>
import BarterOrderItem from "../../common/barterOrder/barterOrderItem.vue";
import BarterRequestItem from "../../common/barterRequest/barterRequestItem.vue";
import SoldItem from "../../common/item/soldItem.vue";
import paginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import UserCardMini from "../../common/user/userCardMini.vue";
import { GET_BARTER_ORDER_PAGINATION } from "../../service/service";
export default {
  components: {
    paginationItemDisplay,
    BarterRequestItem,
    SoldItem,
    UserCardMini,
    BarterOrderItem,
  },
  computed: {},
  methods: {
    getBarterOrderServiceRequest(pageRequest, pageSize) {
      return GET_BARTER_ORDER_PAGINATION(pageRequest, pageSize);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>