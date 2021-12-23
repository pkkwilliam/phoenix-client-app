export const ITEM_SHIPPING_CHARGE_TYPE_CHARGE_BY_DISTANCE = {
  key: "CHARGE_BY_DISTANCE",
  label: "買家全額支付",
};
export const ITEM_SHIPPING_CHARGE_TYPE_CHARGE_FIXED_RATE = {
  key: "CHARGE_FIXED_RATE",
  label: "買家支付固定運費,其餘由賣家承擔",
};
export const ITEM_SHIPPING_CHARGE_TYPE_INCLUDE = {
  key: "INCLUDED",
  label: "包郵",
};

export function getShippingChargeTypeLabelByKey(key) {
  const values = [
    ITEM_SHIPPING_CHARGE_TYPE_CHARGE_BY_DISTANCE,
    ITEM_SHIPPING_CHARGE_TYPE_CHARGE_FIXED_RATE,
    ITEM_SHIPPING_CHARGE_TYPE_INCLUDE,
  ];
  for (let index = 0; index < values.length; index++) {
    if (values[index].key === key) {
      return values[index].label;
    }
  }
  return "未知";
}
