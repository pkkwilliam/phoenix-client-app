export const BANK_BNU_MACAU = { key: "BNU_MACAU", label: "大西洋銀行" };
export const BANK_BOC_MACAU = { key: "BOC_MACAU", label: "中國銀行(澳門)" };
export const BANK_ICBC_MACAU = {
  key: "ICBC_MACAU",
  label: "中國工商銀行(澳門)",
};
export const BANK_LUSO_MACAU = { key: "LUSO_MACAU", label: "澳門國際銀行" };
export const BANK_TAI_FUNG_MACAU = { key: "TAI_FUNG_MACAU", label: "大豐銀行" };

const BANKS = [
  BANK_BNU_MACAU,
  BANK_BOC_MACAU,
  BANK_ICBC_MACAU,
  BANK_LUSO_MACAU,
  BANK_TAI_FUNG_MACAU,
];

export function getBankLabelByKey(key) {
  for (let index = 0; index < BANKS.length; index++) {
    if (key === BANKS[index].key) {
      return BANKS[index].label;
    }
  }
}
