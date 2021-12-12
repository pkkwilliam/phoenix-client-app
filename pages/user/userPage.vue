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
      <view class="small-margin-top-spacer">
        <phone-number-verified-tag />
      </view>
      <view class="small-margin-top-spacer">
        <text>{{ user.description }}</text>
      </view>
      <view class="small-margin-top-spacer">
        <text class="secondary">{{ user.sid }}</text>
      </view>
      <view class="medium-margin-top-spacer">
        <application-line-breaker />
      </view>
      <view>
        <pagination-item-display
          displayType="list"
          :serviceRequest="getItemsByUserId"
          :showSeller="false"
        >
          <template v-slot:content="{ data }">
            <view class="card medium-margin-top-spacer">
              <view class="align-end-container">
                <display-curreny-price class="price" :value="data.price" />
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
import PhoneNumberVerifiedTag from "../../components/user-qualification/phoneNumberVerifiedTag.vue";
import UserSubscribeButton from "../../components/subscribe/user-subscribe-button.vue";
import PaginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import { GET_ITEMS_BY_USER_ID } from "../../service/service";
import UserSaveItem from "../../common/item/userSaveItem.vue";
import DisplayCurrenyPrice from "../../common/displayCurrenyPrice.vue";
import StrikeThroughCurrencyPrice from "../../common/strikeThroughCurrencyPrice.vue";
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import UserLikeCountButton from "../../components/navigationButton/user/userLikeCountButton.vue";
import UserSubscribeCountButton from "../../components/navigationButton/user/userSubscribeCountButton.vue";
import UserFansCountButton from "../../components/navigationButton/user/userFansCountButton.vue";
export default {
  components: {
    PaginationItemDisplay,
    PhoneNumberVerifiedTag,
    UserSaveItem,
    UserSubscribeButton,
    DisplayCurrenyPrice,
    StrikeThroughCurrencyPrice,
    ApplicationLineBreaker,
    UserFansCountButton,
    UserLikeCountButton,
    UserSubscribeCountButton,
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
    const user = getRouterJsonParam(options, "user");
    this.user = user;
  },
  onReachBottom() {
    this.$appStateService.setItemPagination(USER_PAGE);
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
.user-interaction-button {
  margin-left: 30rpx;
  margin-right: 30rpx;
}
</style>