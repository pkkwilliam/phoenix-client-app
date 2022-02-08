<template>
  <view class="container">
    <view class="space-between-center-container">
      <u-avatar size="188" :src="userAvatarImageUrl" />
      <view class="column-center-container">
        <view class="row-center-container">
          <user-like-count-button class="user-interaction-button" />
          <user-subscribe-count-button class="user-interaction-button" />
          <user-fans-count-button class="user-interaction-button" />
        </view>
        <view class="medium-margin-top-spacer full-width">
          <user-subscribe-button size="default" :user="user" />
        </view>
      </view>
    </view>
    <view class="column-container medium-margin-top-spacer">
      <view>
        <text class="h2 lightly-bold">{{ user.nickname }}</text>
      </view>
      <view class="space-between-center-container small-margin-top-spacer">
        <phone-number-verified-tag />
        <chat-message-button type="button" :toUser="user" />
      </view>
      <view class="small-margin-top-spacer">
        <text>{{ user.description }}</text>
      </view>
      <view class="medium-margin-top-spacer">
        <application-line-breaker />
      </view>
      <view>
        <pagination-item-display
          :serviceRequest="getItemsByUserId"
          :showSeller="false"
        >
          <template v-slot:content="{ data }">
            <view class="card medium-margin-top-spacer">
              <view class="align-end-container">
                <display-currency-fish-coin class="price" :value="data.price" />
              </view>
              <user-save-item :item="data" />
            </view>
          </template>
        </pagination-item-display>
      </view>
    </view>
  </view>
</template>

<script>
import { getRouterJsonParam, USER_PAGE } from "../../route/applicationRoute";
import PhoneNumberVerifiedTag from "../../components/tag/phoneNumberVerifiedTag.vue";
import UserSubscribeButton from "../../components/subscribe/UserSubscribeButton.vue";
import PaginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import { GET_ITEMS_BY_USER_ID } from "../../service/service";
import UserSaveItem from "../../common/item/userSaveItem.vue";
import StrikeThroughCurrencyPrice from "../../common/strikeThroughCurrencyPrice.vue";
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import UserLikeCountButton from "../../components/navigationButton/user/userLikeCountButton.vue";
import UserSubscribeCountButton from "../../components/navigationButton/user/userSubscribeCountButton.vue";
import UserFansCountButton from "../../components/navigationButton/user/userFansCountButton.vue";
import DisplayCurrencyFishCoin from "../../common/displayCurrency/displayCurrencyFishCoin.vue";
import ChatMessageButton from "../../components/navigationButton/chat/chatMessageButton.vue";
export default {
  components: {
    PaginationItemDisplay,
    PhoneNumberVerifiedTag,
    UserSaveItem,
    UserSubscribeButton,
    StrikeThroughCurrencyPrice,
    ApplicationLineBreaker,
    UserFansCountButton,
    UserLikeCountButton,
    UserSubscribeCountButton,
    DisplayCurrencyFishCoin,
    ChatMessageButton,
  },
  computed: {
    userAvatarImageUrl() {
      const { user } = this;
      return user.imageUrl
        ? user.imageUrl
        : "https://www.pngitem.com/pimgs/m/10-102802_bear-icon-png-bear-emoticon-hd-png-download.png";
    },
  },
  data() {
    return { user: undefined };
  },
  methods: {
    getItemsByUserId(pageRequest, pageSize) {
      return GET_ITEMS_BY_USER_ID(this.user.sid, pageRequest, pageSize);
    },
  },
  onLoad(options) {
    const userSid = getRouterJsonParam(options, "userSid");
    this.user = {
      sid: userSid,
    };
  },
  onReachBottom() {
    this.$appStateService.setItemPagination(USER_PAGE);
  },
};
</script>

<style lang="scss" scoped>
.user-interaction-button {
  margin-left: 30rpx;
  margin-right: 30rpx;
}
</style>