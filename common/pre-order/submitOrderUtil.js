import {
  REQUEST_MPAY_PAYMENT_INFO,
  CREATE_ORDER,
  GET_ORDER_BY_ID,
} from "../../service/service";
import { submitMpayPayment } from "../../payment/mpay";
import { ITEM_DELIVERY_TYPE_FACE_TO_FACE } from "../../enum/itemDeliveryType";
import { ITEM_SHIPPING_CHARGE_TYPE_INCLUDE } from "../../enum/itemShippingChargeTypes";
import { ORDER_STATUS_PAYMENT_PENDING } from "../../enum/orderStatus";

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

export async function createOrder(
  execute,
  deliveryAddress,
  item,
  itemDeliveryType,
  remark
) {
  const requestBody = {
    deliveryAddress: deliveryAddress ? { id: deliveryAddress.id } : undefined,
    item: { id: item.id },
    itemDeliveryType: itemDeliveryType.key,
    remark,
  };
  console.log("Pre Order Page Payment requestBody:", requestBody);
  const order = await execute(CREATE_ORDER(requestBody));
  console.log("order created", order.id);
  return order;
}

export async function requestMpayPaymentInfo(order) {
  const mpayRequestInfoRequest = await execute(
    REQUEST_MPAY_PAYMENT_INFO(order.id)
  );
  console.log(
    "received mpay request presign string:",
    mpayRequestInfoRequest.preSignString
  );
}

export async function isOrderPaid(order) {
  const responseOrder = await execute(GET_ORDER_BY_ID(order.id));
  if (responseOrder.orderStatus !== ORDER_STATUS_PAYMENT_PENDING.key) {
    return true;
  } else {
    return false;
  }
}

export async function executeMpayPayment({
  mpayRequestInfoRequest,
  paymentChannel,
}) {
  return await submitMpayPayment(mpayRequestInfoRequest, paymentChannel);
}
