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

const values = [
  ITEM_SHIPPING_CHARGE_TYPE_CHARGE_BY_DISTANCE,
  ITEM_SHIPPING_CHARGE_TYPE_CHARGE_FIXED_RATE,
  ITEM_SHIPPING_CHARGE_TYPE_INCLUDE,
];

export function getShippingChargeTypeLabelByKey(key) {
  return getShippingChargeTypeObjectByKey(key).label;
}

export function getShippingChargeTypeObjectByKey(key) {
  for (let index = 0; index < values.length; index++) {
    if (values[index].key === key) {
      return values[index];
    }
  }
}
