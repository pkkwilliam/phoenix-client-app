<template>
  <u-button size="mini" type="success" @click="onClick">
    更新微信用戶資料
  </u-button>
</template>

<script>
import { UPDATE_USER_PROFILE } from "../../common/service";
export default {
  methods: {
    onClick() {
      console.log("hererer");
      console.log(uni.getUserProfile);
      uni.getUserProfile({
        desc: "授權使用您的賬號信息",
        success: (response) => {
          const { avatarUrl, gender, nickName } = response.userInfo;
          this.execute(
            UPDATE_USER_PROFILE({
              imageUrl: avatarUrl,
              name: nickName,
            })
          ).then((response) => this.$store.commit("setUserProfile", response));
        },
      });
    },
  },
};
</script>
