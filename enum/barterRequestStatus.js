import { BARTER_ROLE_OFFERER } from "./barterRole";

export const BARTER_REQUEST_APPROVED = { label: "已接受", key: "APPROVED" };
export const BARTER_REQUEST_CANCELED = { label: "已取消", key: "CANCELED" };
export const BARTER_REQUEST_PENDING = {
  label: "待處理",
  key: "PENDING",
  offererLabel: "待回覆",
  receiverLabel: "待處理",
};
export const BARTER_REQUEST_REJECTED = { label: "已婉絕", key: "REJECTED" };

export const BARTER_REQUEST_STATUS = [
  BARTER_REQUEST_APPROVED,
  BARTER_REQUEST_CANCELED,
  BARTER_REQUEST_PENDING,
  BARTER_REQUEST_REJECTED,
];

export function getBarterRequestLabelByKey(key, barterRole) {
  const barterRequestStatus = getBarterRequestStatusByKey(key);
  if (barterRole && key === BARTER_REQUEST_PENDING.key) {
    return barterRole === BARTER_ROLE_OFFERER.key
      ? barterRequestStatus.offererLabel
      : barterRequestStatus.receiverLabel;
  } else {
    return barterRequestStatus.label;
  }
}

export function getBarterRequestStatusByKey(key) {
  for (let index = 0; index < BARTER_REQUEST_STATUS.length; index++) {
    if (BARTER_REQUEST_STATUS[index].key === key) {
      return BARTER_REQUEST_STATUS[index];
    }
  }
}
