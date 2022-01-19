export const MACAU = { text: "+853", value: "853" };
export const CHINA = { text: "+86", value: "86" };
export const HONG_KONG = { text: "+852", value: "852" };

export const COUNTRY_CODES = [MACAU, CHINA, HONG_KONG];

export function getTextByValue(value) {
  return getByValue(value).text;
}

export function getByValue(value) {
  for (let index = 0; index < COUNTRY_CODES.length; index++) {
    if (value === COUNTRY_CODES[index].value) {
      return COUNTRY_CODES[index];
    }
  }
}
