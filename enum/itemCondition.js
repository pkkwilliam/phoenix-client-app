export const ITEM_CONDITION_ACCEPTABLE = {
  key: "ACCEPTABLE",
  label: "明顯使用痕跡",
};
export const ITEM_CONDITION_DEFECT = { key: "DEFECT", label: "不能使用" };
export const ITEM_CONDITION_GOOD = { key: "GOOD", label: "輕微使用痕跡" };
export const ITEM_CONDITION_LIKE_NEW = { key: "LIKE_NEW", label: "幾乎全新" };
export const ITEM_CONDITION_NEW = { key: "NEW", label: "全新" };

export function getItemConditionLabelByKey(key) {
  const values = [
    ITEM_CONDITION_ACCEPTABLE,
    ITEM_CONDITION_DEFECT,
    ITEM_CONDITION_GOOD,
    ITEM_CONDITION_LIKE_NEW,
    ITEM_CONDITION_NEW,
  ];
  for (let index = 0; index < values.length; index++) {
    if (values[index].key === key) {
      return values[index].label;
    }
  }
  return "未知";
}
