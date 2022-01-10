export const ADDRESS_FORM_PAGE = (address) => {
  let url = "/pages/addressFormPage";
  if (address) {
    url += "?address=" + JSON.stringify(address);
  }
  return { url };
};
export const ADDRESS_SELECTION_PAGE = () => ({
  url: "/pages/addressSelectionPage",
});
export const ANNOUNCEMENT_DETAIL_PAGE = () => ({
  url: "/pages/announcementDetailPage",
});
export const BARTER_PRE_ORDER_PAGE = (item) => ({
  url: "/pages/order/barterPreOrderPage?item=" + JSON.stringify(item),
});
export const BUYER_ORDER_DETAIL_PAGE = (orderObject) => ({
  url: "/pages/order/buyerOrderDetailPage?order=" + JSON.stringify(orderObject),
});
export const CASH_OUT_PAGE = () => ({
  url: "/pages/cashOut/cashOutFormPage",
});
export const CASH_OUT_HISTORY_PAGE = () => ({
  url: "/pages/cashOut/cashOutHistoryPage",
});
export const CHANGE_PASSWORD_PAGE = () => ({
  url: "/pages/changePasswordPage",
});
export const BANK_ACCOUNT_FORM_PAGE = (bankAccount) => ({
  url:
    "/pages/bankAccount/bankAccountFormPage?bankAccount=" +
    JSON.stringify(bankAccount),
});
export const FORGOT_PASSWORD_PAGE = () => ({
  url: "/pages/forgotPasswordPage",
});
export const ITEM_DETAIL_PAGE = (itemObject) => ({
  url: "/pages/itemDetailPage?item=" + JSON.stringify(itemObject),
});
export const LOGIN_PAGE = () => ({
  url: "/pages/loginPage",
});
export const MATCH_BAD_PARCEL_PAGE = () => ({
  url: "/pages/matchBadParcelPage",
});
export const PAYMENT_SELECTION_PAGE = (order) => ({
  url: "/pages/payment/paymentSelectionPage?order=" + JSON.stringify(order),
});
export const PRE_ORDER_PAGE = (item) => ({
  url: "/pages/preOrderPage?item=" + JSON.stringify(item),
});
export const PARCEL_LIST_PAGE = () => ({ url: "/pages/parcelListPage" });
export const PICKUP_CODE_PAGE = () => ({ url: "/pages/pickupCodePage" });
export const REGISTER_PAGE = () => ({ url: "/pages/registerPage" });
export const SELLER_ORDER_DETAIL_PAGE = (orderObject) => ({
  url:
    "/pages/order/sellerOrderDetailPage?order=" + JSON.stringify(orderObject),
});
export const SHOP_LIST_PAGE = () => ({ url: "/pages/shopListPage" });
export const MY_BANK_ACCOUNT_PAGE = () => ({
  url: "/pages/bankAccount/myBankAccountPage",
});
export const MY_ORDER_PAGE = () => ({
  url: "/pages/me/myOrderPage",
});
export const MY_LIST_PAGE = () => ({
  url: "/pages/me/myListPage",
});
export const MY_SAVE_ITEM_PAGE = () => ({
  url: "/pages/me/mySaveItemPage",
});
export const MY_SETTING_PAGE = () => ({
  url: "/pages/me/mySettingPage",
});
export const MY_SOLD_PAGE = () => ({
  url: "/pages/me/mySoldPage",
});
export const MY_VIEW_ITEM_PAGE = () => ({
  url: "/pages/me/myViewItemPage",
});
export const ORDER_CONFIRMED_PAGE = (order) => ({
  url: "/pages/order/orderConfirmedPage?order=" + JSON.stringify(order),
});
export const SEARCH_ITEM_PAGE = () => ({
  url: "/pages/item/searchItemPage",
});
export const SHIPPING_COST_ESTIMATE_PAGE = () => ({
  url: "/pages/shipping/shippingCostEstimatePage",
});
export const WORKBENCH_PAGE = () => ({
  url: "/pages/workbenchPage",
});
export const USER_PAGE = (user) => ({
  url: `/pages/user/userPage?user=${JSON.stringify(user)}`,
});
// tab
export const CREATE_ITEM_TAB = (item) => ({
  url: "/pages/createItemPage?item=" + JSON.stringify(item),
});
export const LANDING_TAB = () => ({
  url: "/pages/index/tabbar",
});
export const ME_TAB = () => ({ url: "/pages/index/me" });

export function getRouterJsonParam(option, paramName) {
  return JSON.parse(option[paramName]);
}
