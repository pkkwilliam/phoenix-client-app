const USER_TOKEN = "USER_TOJEN";

export function getUserToken() {
  return getStorage(USER_TOKEN);
}

export function setUserToken(token) {
  setStorage(USER_TOKEN, token);
}

export function removeUserToken() {
  removeStorage(USER_TOKEN);
}

export function getStorage(key) {
  return uni.getStorageSync(key);
}

export function removeStorage(key) {
  return uni.removeStorageSync(key);
}

export function setStorage(key, value) {
  uni.setStorageSync(key, value);
}
