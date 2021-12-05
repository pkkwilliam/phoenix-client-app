import { CREATE_MPAY_ORDER } from "../../service/service";
import { submitMpayPayment } from "../../payment/mpay";

export async function sumbitMpayOrder(
  execute,
  deliveryAddress,
  item,
  itemDeliveryType,
  paymentChannel,
  remark
) {
  const requestBody = {
    deliveryAddress: deliveryAddress ? deliveryAddress : undefined,
    item: { id: item.id },
    itemDeliveryType: itemDeliveryType.key,
    paymentChannel: paymentChannel.key,
    remark,
  };
  console.log("submit mpay order", requestBody);
  const mpayRequestInfoRequest = await execute(CREATE_MPAY_ORDER(requestBody));
  console.log(
    "received mpay request presign string:",
    mpayRequestInfoRequest.preSignString
  );
  const paymentResult = submitMpayPayment(
    mpayRequestInfoRequest,
    paymentChannel
  );
}
