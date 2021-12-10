export const ORDER_STATUS_PAYMENT_PENDING = {
  actionText: "",
  key: "PAYMENT_PENDING",
  label: "等待買家付款",
  shortLabel: "已拍下",
  shortLabelPending: "待拍下",
};
export const ORDER_STATUS_SHIPMENT_PENDING = {
  actionText: "請您及時聯繫買家或注意快递公司的電話",
  key: "SHIPMENT_PENDING",
  label: "等待賣家發貨",
  shortLabel: "已付款",
  shortLabelPending: "待付款",
};
export const ORDER_STATUS_DELIVERY_PENDING = {
  actionText: "正在等待買家收到及驗收貨物",
  key: "DELIVERY_PENDING",
  label: "等待買家收貨",
  shortLabel: "已發貨",
  shortLabelPending: "待發貨",
};
export const ORDER_STATUS_DELIVERED = {
  actionText: "買家收到貨品，貨款將在7天內發送到您的默認銀行賬戶",
  key: "DELIVERED",
  label: "等待買家評價",
  shortLabel: "已收貨",
  shortLabelPending: "待收貨",
};
export const ORDER_STATUS_COMMENTED = {
  actionText: "完成",
  key: "COMMENTED",
  label: "已評論",
  shortLabel: "已評論",
  shortLabelPending: "待評論",
};
export const ORDER_STATUS_FINISHED = { key: "FINISHED", label: "已完成" };
export const ORDER_STATUS_CUSTOMER_SERVICE_IN_PROGRESS = {
  key: "CUSTOMER_SERVICE_IN_PROGRESS",
  label: "客服處理中",
};
export const ORDER_STATUS_CONTACT_CUSTOMER_SERVICE = {
  key: "CONTACT_CUSTOMER_SERVICE",
  label: "請聯絡客服",
};

const ORDER_STATUSES = [
  ORDER_STATUS_PAYMENT_PENDING,
  ORDER_STATUS_SHIPMENT_PENDING,
  ORDER_STATUS_DELIVERY_PENDING,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_COMMENTED,
  ORDER_STATUS_FINISHED,
  ORDER_STATUS_CUSTOMER_SERVICE_IN_PROGRESS,
  ORDER_STATUS_CONTACT_CUSTOMER_SERVICE,
];

export function getOrderStatusByKey(key) {
  for (let index = 0; index < ORDER_STATUSES.length; index++) {
    if (key === ORDER_STATUSES[index].key) {
      return ORDER_STATUSES[index];
    }
  }
}

export function getOrderStatusLabelByKey(key) {
  return getOrderStatusByKey(key).label;
}
