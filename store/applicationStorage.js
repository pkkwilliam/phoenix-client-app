import { CHINESE_TRADITIONAL } from "../enum/language";

const LANGUAGE = "LANGUAGE";
const USER_TOKEN = "USER_TOKEN";

// Language
export function getLanguage() {
  const language = getStorage(LANGUAGE);
  return language ? language : CHINESE_TRADITIONAL;
}

export function setLanguage(language) {
  setStorage(LANGUAGE, language);
}

// Token
export function getUserToken() {
  return getStorage(USER_TOKEN);
}

export function setUserToken(token) {
  setStorage(USER_TOKEN, token);
}

export function removeUserToken() {
  removeStorage(USER_TOKEN);
}

// Wrapper
export function getStorage(key) {
  return uni.getStorageSync(key);
}

export function removeStorage(key) {
  return uni.removeStorageSync(key);
}

export function setStorage(key, value) {
  uni.setStorageSync(key, value);
}
