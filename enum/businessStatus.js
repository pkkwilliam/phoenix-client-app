export const BUSINESS_STATUS_APPROVED = { label: "正常", key: "APPROVED" };
export const BUSINESS_STATUS_PENDING = { label: "審批中", key: "PENDING" };
export const BUSINESS_STATUS_REJECTED = { label: "未批准", key: "REJECTED" };
export const BUSINESS_STATUS_REMOVED = { label: "停用", key: "REMOVED" };

export const BUSINESS_STATUSES = [
  BUSINESS_STATUS_APPROVED,
  BUSINESS_STATUS_PENDING,
  BUSINESS_STATUS_REJECTED,
  BUSINESS_STATUS_REMOVED,
];

export function getBusinessStatusLabelByKey(key) {
  return getBusinessStatusByKey(key).label;
}

export function getBusinessStatusByKey(key) {
  for (let index = 0; index < BUSINESS_STATUSES.length; index++) {
    if (BUSINESS_STATUSES[index].key === key) {
      return BUSINESS_STATUSES[index];
    }
  }
}
