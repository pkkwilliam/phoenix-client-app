import ApplicationExceptionCode from "./applicationExceptionCode.json";

const TOKEN_HEADER = "authorization ";

export const execute = (
  host,
  store,
  getUserToken,
  setUserToken,
  removeUserToken,
  service
) => {
  const { authenticatedRequest, body, method, url } = service;
  return new Promise((resolve, reject) => {
    const userToken = getUserToken();
    if (authenticatedRequest && (!userToken || userToken === "")) {
      return reject("用戶需要先登入");
    }
    uni.request({
      url: host + url,
      method,
      header: {
        Authorization: "Bearer " + getUserToken(),
      },
      data: body,
      success: (response) => {
        const { data, header, statusCode } = response;
        if (statusCode === 200) {
          if (header[TOKEN_HEADER]) {
            setUserToken(header[TOKEN_HEADER]);
          }
          return resolve(data);
        } else if (statusCode >= 202 && statusCode < 300) {
          return resolve(data);
        } else if (statusCode === 403) {
          this.removeUserToken();
          return reject("用戶被登出");
        } else if (statusCode >= 400 && statusCode < 500) {
          // reject(data.message);
          uni.showModal({
            title: "出錯",
            content: getExceptionTranslation(data.errorCode, data.message),
          });
          return reject(data.message);
        } else {
          return reject("INTERNAL SERVER ERRROR");
        }
      },
      fail: (response) => {
        console.log("failed ", response.header);
      },
    });
  });
};

export function getExceptionTranslation(exceptionCode, message) {
  if (ApplicationExceptionCode[exceptionCode]) {
    return ApplicationExceptionCode[exceptionCode];
  }
  return message;
}
