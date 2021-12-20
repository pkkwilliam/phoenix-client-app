import { ALIPAY, M_PAY, WECHAT_PAY } from "../enum/paymentChannel";

const mpay = uni?.requireNativePlugin("sn-mpay") ?? undefined;

const isAndroid = uni.getSystemInfoSync().platform === "android";

if (process.env.NODE_ENV === "development") {
  // mpay.setAlipayEnv(1);
  mpay.setEnvironmentType(2);
  mpay.setMPayAppId(2);
  if (isAndroid) {
    mpay.setMPayAppId(2);
  }
} else {
  // mpay.setAlipayEnv(0);
  mpay.setEnvironmentType(0);
}

if (isAndroid) {
  mpay.initWeChatData("missing!!!");
} else {
  mpay.initWeChatData({
    appId: "missing!!!",
    universalLink: "",
  });
}

export async function submitMpayPayment(request, paymentChannel) {
  console.log("attempt to submit mpay payment isAndroid:", isAndroid);
  let executeFunction;
  if (isAndroid) {
    executeFunction = submitAndroidPayment;
  } else {
    executeFunction = getIosPaymentChannelMethod(paymentChannel);
  }
  console.log("executeFunction", executeFunction);
  await executeFunction(request);
}

export function submitAndroidPayment(request) {
  console.log("submit Android payment");
  mpay.newPayAll(request.preSignString, (e) => {
    console.log("response", e);
    // e.code = 0:成功 | 1:失败
    // e.order = {} // 当e.code = 0返回订单结果
    // 当失败的时候，打印e可以看到具体错误信息
  });
}

export function getIosPaymentChannelMethod(paymentChannel) {
  switch (paymentChannel) {
    case ALIPAY:
      return submitIosAlipay;
    case M_PAY:
      return submitIosMpay;
    case WECHAT_PAY:
      return submitIoswechatPay;
  }
}

const submitIosAlipay = (request) => {
  console.log("submit iOS Alipay payment");
  const { preSignString } = request;
  mpay.alipay(
    {
      payJson: preSignString,
      scheme: "",
    },
    (e) => {
      console.log("response", e);
      // e.code = 0:成功 | 1:失败
      // e.order = {} // 当e.code = 0返回订单结果
      // 当失败的时候，打印e可以看到具体错误信息
    }
  );
};

const submitIosMpay = (request) => {
  console.log("submit iOS Mpay payment");
  const { preSignString } = request;
  console.log(preSignString);
  mpay.mpay(
    {
      payJson: preSignString,
      scheme: "",
    },
    (e) => {
      console.log("response", e);
      // e.code = 0:成功 | 1:失败
      // e.order = {} // 当e.code = 0返回订单结果
      // 当失败的时候，打印e可以看到具体错误信息
    }
  );
};

const submitIoswechatPay = (request) => {
  console.log("submit iOS WeChat payment");
  const { preSignString } = request;
  mpay.wechat(
    {
      payJson: preSignString,
      scheme: "",
    },
    (e) => {
      console.log("response", e);
      // e.code = 0:成功 | 1:失败
      // e.order = {} // 当e.code = 0返回订单结果
      // 当失败的时候，打印e可以看到具体错误信息
    }
  );
};

export const testIOSMpay = () => {
  mpay.setEnvironmentType(2);
  mpay.setMPayAppId(2);
  uni.request({
    success: (response) => {
      mpay.mpay(
        {
          payJson:
            '{"body":"Purchase Order ID:78 Item ID:5","currency":"MOP","extend_params":"{\\"sub_merchant_id\\":\\"888534816843798\\",\\"sub_merchant_industry\\":\\"4816\\",\\"sub_merchant_name\\":\\"源代碼\\"}","goods_detail":"[{\\"body\\":\\"5\\",\\"goods_name\\":\\"物品編號:5\\",\\"price\\":\\"5.00\\",\\"quantity\\":\\"1\\"}]","it_b_pay":"30m","notify_url":"http://localhost:8081/public/mpay_notify/v1/order","out_trans_id":"P78","pay_channel":"mpay","passback_parameters":"orderId=78","product_code":"MP_APP_PAY","return_url":"","sub_appid":"missing","subject":"單號:78","total_fee":"5.00","service":"mpay.trade.mobile.pay","org_id":"888534816843798","channel_type":"1","sign_type":"MD5","sign":"1f8bc01b345b49759866a6a4e7bd6987","format":"JSON","timestamp":"1638265080810","nonce_str":"f292992e804d489282028afba5dbf812","version":"1.1.0"}',
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
// export const submitAndroidPayment = (request, paymentChannel) => {
//   uni.request({
//     success: (response) => {
//       mpay.newPayAll(response.data.preSignString, (e) => {
//         console.log("response", e);
//         // e.code = 0:成功 | 1:失败
//         // e.order = {} // 当e.code = 0返回订单结果
//         // 当失败的时候，打印e可以看到具体错误信息
//       });
//     },
//     url: "https://phoenix-uat-api.bitcode.mo/public/mpay/v1?transactionId=a11&paymentChannel=M_PAY",
//   });
// };

// export const submitIOSMpay = (request, paymentChannel) => {
//   uni.request({
//     success: (response) => {
//       mpay.mpay(
//         {
//           payJson: response.data.preSignString,
//           scheme: "",
//         },
//         (e) => {
//           console.log("response", e);
//           // e.code = 0:成功 | 1:失败
//           // e.order = {} // 当e.code = 0返回订单结果
//           // 当失败的时候，打印e可以看到具体错误信息
//         }
//       );
//     },
//     url: "https://phoenix-uat-api.bitcode.mo/public/mpay/v1?transactionId=a12&paymentChannel=M_PAY",
//   });
// };
