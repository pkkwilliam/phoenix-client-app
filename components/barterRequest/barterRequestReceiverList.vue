<template>
  <view>
    <pagination-item-display :serviceRequest="getOffererBarterRequest">
      <template ref="paginationItemDisplayRef" v-slot:content="{ data }">
        <view class="card medium-margin-top-spacer">
          <barter-request-item :barterRequest="data" />
        </view>
      </template>
    </pagination-item-display>
  </view>
</template>

<script>
import PaginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import { GET_BARTER_REQUEST_RECEIVER } from "../../service/service";
import { BARTER_REQUEST_PENDING } from "../../enum/barterRequestStatus";
import BarterRequestItem from "../../common/barterRequest/barterRequestItem.vue";
export default {
  components: {
    PaginationItemDisplay,
    BarterRequestItem,
  },
  methods: {
    getOffererBarterRequest(pageRequest, pageSize) {
      return GET_BARTER_REQUEST_RECEIVER(
        [BARTER_REQUEST_PENDING.key],
        pageRequest,
        pageSize
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>