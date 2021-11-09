const mpay = uni.requireNativePlugin("sn-mpay");
mpay.setEnvironmentType(2);
mpay.setMPayAppId(2);

export const submitAndroidMpay = () => {
  uni.request({
    success: (response) => {
      mpay.newPayAll(response.data.preSignString, (e) => {
        console.log("response", e);
        // e.code = 0:成功 | 1:失败
        // e.order = {} // 当e.code = 0返回订单结果
        // 当失败的时候，打印e可以看到具体错误信息
      });
    },
    url: "https://phoenix-uat-api.bitcode.mo/public/mpay/v1?transactionId=a9&paymentChannel=ALIPAY",
  });
};

export const submitIOSMpay = () => {
  uni.request({
    success: (response) => {
      mpay.mpay(
        {
          payJson: response.data.preSignString,
          scheme: "",
        },
        (e) => {
          console.log("response", e);
          // e.code = 0:成功 | 1:失败
          // e.order = {} // 当e.code = 0返回订单结果
          // 当失败的时候，打印e可以看到具体错误信息
        }
      );
    },
    url: "https://phoenix-uat-api.bitcode.mo/public/mpay/v1?transactionId=a2&paymentChannel=ALIPAY",
  });
};
