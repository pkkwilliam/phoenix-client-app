import { CREATE_MPAY_ORDER } from "../../service/service";
import { submitMpayPayment } from "../../payment/mpay";
import { ITEM_DELIVERY_TYPE_FACE_TO_FACE } from "../../enum/itemDeliveryType";
import { ITEM_SHIPPING_CHARGE_TYPE_INCLUDE } from "../../enum/itemShippingChargeTypes";

export async function sumbitMpayOrder(
  execute,
  deliveryAddress,
  item,
  itemDeliveryType,
  paymentChannel,
  remark
) {
  console.log(itemDeliveryType);
  const requestBody = {
    deliveryAddress: deliveryAddress ? deliveryAddress : undefined,
    item: { id: item.id },
    itemDeliveryType: itemDeliveryType.key,
    paymentChannel: paymentChannel.key,
    remark,
  };
  // const mpayRequestInfoRequest = await execute(CREATE_MPAY_ORDER(requestBody));
  // console.log(
  //   "received mpay request presign string:",
  //   mpayRequestInfoRequest.preSignString
  // );
  // const paymentResult = submitMpayPayment(
  //   mpayRequestInfoRequest,
  //   paymentChannel
  // );
}

export function calculateOrderCost(item, selectedDeliveryType) {
  const { fixedShippingCharge, itemShippingChargeType } = item.itemShippingInfo;
  let shippingFee = 0;
  if (
    selectedDeliveryType.key !== ITEM_DELIVERY_TYPE_FACE_TO_FACE.key &&
    itemShippingChargeType !== ITEM_SHIPPING_CHARGE_TYPE_INCLUDE.key
  ) {
    shippingFee = fixedShippingCharge;
  }
  return item.price + shippingFee;
}
