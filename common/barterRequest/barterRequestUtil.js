import {
  BARTER_ROLE_OFFERER,
  BARTER_ROLE_RECEIVER,
} from "../../enum/barterRole";

export function getBarterRequestType(barterRequest, store) {
  return barterRequest.createBy.sid === store.state.userProfile.profile.sid
    ? BARTER_ROLE_RECEIVER
    : BARTER_ROLE_RECEIVER;
}

export function getBarterRequestInfo(barterRequest) {
  const { barterRole, offerItems, requestItem } = barterRequest;
  const offererInfo = `用${offerItems.length}件物品換取1件物品`;
  const receiverInfo = `想用${offerItems.length}物品換取您1件物品`;
  return barterRole === BARTER_ROLE_OFFERER.key ? offererInfo : receiverInfo;
}

export function getBarterRequestPriceDifference(barterRequest) {
  const { requestItem, offerItems } = barterRequest;
  let totalItemsValue = 0;
  // since Vue data is an object, we need to use this ancient methods
  for (let index = 0; index < offerItems.length; index++) {
    totalItemsValue += offerItems[index].price;
  }
  return totalItemsValue - requestItem.price;
}

export function getCoverImage(barterRequest) {
  return barterRequest.requestItem.images[0];
}

export function getOppositePartyUser(barterRequest) {
  const { barterRole, createBy, receiver } = barterRequest;
  return barterRole === BARTER_ROLE_OFFERER.key ? receiver : createBy;
}
