export const MACAU = { label: "+853", key: "853" };
export const CHINA = { label: "+86", key: "86" };
export const HONG_KONG = { label: "+852", key: "852" };

export const COUNTRY_CODES = [MACAU, CHINA, HONG_KONG];

export function getLabelByKey(key) {
  return getByKey(key).label;
}

export function getByKey(key) {
  for (let index = 0; index < COUNTRY_CODES.length; index++) {
    if (key === COUNTRY_CODES[index].key) {
      return COUNTRY_CODES[index];
    }
  }
}
