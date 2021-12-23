<script>
import Vue from "vue";
import { CREATE_ITEM_TAB } from "./route/applicationRoute";
export default {
  onLaunch: function () {
    uni.getSystemInfo({
      success: function (e) {
        // #ifndef MP
        Vue.prototype.StatusBar = e.statusBarHeight;
        if (e.platform == "android") {
          Vue.prototype.CustomBar = e.statusBarHeight + 50;
        } else {
          Vue.prototype.CustomBar = e.statusBarHeight + 45;
        }
        // #endif
        // #ifdef MP-WEIXIN
        Vue.prototype.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        Vue.prototype.Custom = custom;
        Vue.prototype.CustomBar =
          custom.bottom + custom.top - e.statusBarHeight + 4;
        // #endif
        // #ifdef MP-ALIPAY
        Vue.prototype.StatusBar = e.statusBarHeight;
        Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
        // #endif
      },
    });
    setInterval(() => {
      var info = plus.push.getClientInfo();
      //   console.log(JSON.stringify(info));
    }, 5000);
    console.log(plus.os);
    /* 5+  push 消息推送 ps:使用:H5+的方式监听，实现推送*/
    plus.push.addEventListener(
      "click",
      function (msg) {
        console.log("click:" + JSON.stringify(msg));
        console.log(msg.payload);
        console.log(JSON.stringify(msg));
        //这里可以写跳转业务代码
      },
      false
    );
    plus.push.addEventListener(
      "receive",
      function (msg = {}) {
        const isAndroid = plus.os.name === "Android";
        console.log(plus.os);
        console.log(msg, !isAndroid);
        console.log(msg);
        if (!isAndroid) {
          // 如果是IOS
          const payload = msg.payload;
          // 【APP离线】收到消息，但没有提醒（发生在一次收到多个离线消息时，只有一个有提醒，但其他的没有提醒）
          // 【APP在线】收到消息，不会触发系统消息,需要创建本地消息，但不能重复创建。必须加msg.type验证去除死循环
          if (msg.aps == null && msg.type === "receive") {
            const messageTitle = payload.messageTitle || "default title";
            const messageContent = payload.messageContent || "default content";
            // 创建本地消息,发送的本地消息也会被receive方法接收到，但没有type属性，且aps是null
            plus.push.createMessage(messageContent, JSON.stringify(payload), {
              title: messageTitle,
            });
          } else {
          }
        } else {
          plus.push.createMessage(
            "test here",
            {},
            {
              title: "sdfsdf",
            }
          );
          let payload = {};
          console.log(typeof msg.payload === "object", typeof msg.payload);
          if (typeof msg.payload === "object") {
            payload = msg.payload || {};
          } else {
            payload = JSON.parse(msg.payload) || {};
          }
          console.log(payload);
          const messageTitle = payload.messageTitle || "";
          const messageContent = payload.messageContent || "";
          plus.push.createMessage(messageContent, JSON.stringify(payload), {
            title: messageTitle,
          });
        }
        console.log(msg);
      },
      false
    );
  },
  onShow: function () {
    console.log("App Show");
    uni.onTabBarMidButtonTap(() => {
      uni.navigateTo({
        url: CREATE_ITEM_TAB().url,
      });
    });
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "colorui/main.css";
@import "colorui/icon.css";
@import "static/custom-icon/iconfont.css";
@import "uview-ui/index.scss";
</style>
