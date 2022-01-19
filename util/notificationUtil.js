import { LINK_USER_PUSH_NOTIFICATION_TOKEN } from "../service/service";

export async function processPushNotificationToken({
  execute,
  getPushNotificationToken,
  isLogin,
  setPushNotificationToken,
}) {
  const onGetPushNotificationSuccss = async (clientInfo) => {
    console.log("start onGetPushNotificationSuccss");
    // system push notifcation token
    const { clientid } = clientInfo;
    // system store push notification token
    let currentPushNotificationToken = getPushNotificationToken();

    console.log("success to retrieve client id", clientid);
    console.log(
      "current system push notification token",
      currentPushNotificationToken
    );
    if (clientid !== currentPushNotificationToken) {
      console.log("update user push notification token");
      await execute(
        LINK_USER_PUSH_NOTIFICATION_TOKEN({ pushNotificationToken: clientid })
      );
      setPushNotificationToken(clientid);
    }
  };
  plus.push.getClientInfoAsync(onGetPushNotificationSuccss, (error) => {
    console.log("error to retrieve client info");
  });
  console.log("executed");
}
