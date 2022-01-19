import {
  ITEM_DELIVERY_TYPE_THIRD_PARTY_DELIVERY,
  ITEM_DELIVERY_TYPE_FACE_TO_FACE,
} from "../enum/itemDeliveryType";

export function createItemServiceRequestBody(
  descriptionRequest,
  mediaAccessUrls,
  itemLocation,
  categoryRequest,
  subCategoryRequest,
  conditionRequest,
  priceRequest,
  originalPriceRequest,
  shippingChargeTypeRequest,
  fixedShippingCharge,
  allowFaceToFaceRequest
) {
  const category = { id: categoryRequest.id };
  const subCategory = { id: subCategoryRequest.id };
  const deliveryType = [ITEM_DELIVERY_TYPE_THIRD_PARTY_DELIVERY.key];
  if (allowFaceToFaceRequest) {
    deliveryType.push(ITEM_DELIVERY_TYPE_FACE_TO_FACE.key);
  }
  const requestBody = {
    availableDeliveryTypes: deliveryType,
    description: descriptionRequest,
    images: mediaAccessUrls,
    itemCondition: conditionRequest.key,
    itemLocation,
    itemShippingInfo: {
      fixedShippingCharge,
      itemShippingChargeType: shippingChargeTypeRequest,
    },
    category,
    originalPrice: originalPriceRequest,
    price: priceRequest,
    subCategory,
  };
  console.log("createItemServiceRequest", requestBody);
  return requestBody;
}
