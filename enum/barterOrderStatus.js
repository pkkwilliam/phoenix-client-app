export const BARTER_ORDER_STATUS_EXCEPTION = {
  key: "EXCEPTION",
  label: "請聯繫客服",
};
export const BARTER_ORDER_STATUS_EXCHANGE_PENDING = {
  key: "EXCHANGE_PENDING",
  label: "待雙方收貨",
};
export const BARTER_ORDER_STATUS_FINISHED = {
  key: "FINISHED",
  label: "完成",
};

export const BARTER_ORDER_STATUSES = [
  BARTER_ORDER_STATUS_EXCEPTION,
  BARTER_ORDER_STATUS_EXCHANGE_PENDING,
  BARTER_ORDER_STATUS_FINISHED,
];

export function getLabelByBarterOrderStatusKey(key) {
  return getByBarterOrderStatusKey(key).label;
}

export function getByBarterOrderStatusKey(key) {
  for (let index = 0; index < BARTER_ORDER_STATUSES.length; index++) {
    if (BARTER_ORDER_STATUSES[index].key === key) {
      return BARTER_ORDER_STATUSES[index];
    }
  }
}
