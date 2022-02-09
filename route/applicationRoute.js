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
export const BANK_ACCOUNT_FORM_PAGE = (bankAccount) => ({
  url:
    "/pages/bankAccount/bankAccountFormPage?bankAccount=" +
    JSON.stringify(bankAccount),
});
export const BARTER_ORDER_PAGE = () => ({
  url: "/pages/barterOrder/barterOrderPage",
});
export const BARTER_ORDER_DETAIL_PAGE = (barterOrderId) => ({
  url:
    "/pages/barterOrder/barterOrderDetailPage?barterOrderId=" +
    JSON.stringify(barterOrderId),
});
export const BARTER_PRE_ORDER_PAGE = (itemId) => ({
  url: "/pages/order/barterPreOrderPage?itemId=" + JSON.stringify(itemId),
});
export const BARTER_REQUEST_DETAIL_PAGE = (barterRequestId) => ({
  url:
    "/pages/barterRequest/barterRequestDetailPage?barterRequestId=" +
    JSON.stringify(barterRequestId),
});
export const BUSINESS_PAGE = () => ({
  url: "/pages/business/businessPage",
});
export const BUSINESS_FORM_PAGE = (business) => ({
  url: "/pages/business/businessFormPage?business=" + JSON.stringify(business),
});
export const BUYER_ORDER_DETAIL_PAGE = (orderObject) => ({
  url: "/pages/order/buyerOrderDetailPage?order=" + JSON.stringify(orderObject),
});
export const CASH_OUT_PAGE = (cashOutType) => ({
  url:
    "/pages/cashOut/cashOutFormPage?cashOutType=" + JSON.stringify(cashOutType),
});
export const CASH_OUT_HISTORY_PAGE = () => ({
  url: "/pages/cashOut/cashOutHistoryPage",
});
export const CHANGE_PASSWORD_PAGE = () => ({
  url: "/pages/changePasswordPage",
});
export const CHAT_PAGE = () => ({
  url: "/pages/chat/chatPage",
});
export const CHAT_MESSAGE_PAGE = (toUserSid) => ({
  url: "/pages/chat/chatMessagePage?toUserSid=" + JSON.stringify(toUserSid),
});
export const CREATE_BARTER_REQUEST_PAGE = (itemId) => ({
  url:
    "/pages/barterRequest/createBarterRequestPage?itemId=" +
    JSON.stringify(itemId),
});
export const FORGOT_PASSWORD_PAGE = () => ({
  url: "/pages/forgotPasswordPage",
});
export const ITEM_DETAIL_PAGE = (itemObject) => ({
  url: "/pages/itemDetailPage?itemId=" + JSON.stringify(itemObject),
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
export const REFILL_INFO_PAGE = () => ({ url: "/pages/refill/refillInfoPage" });
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
export const USER_PAGE = (userSid, description, imageUrl) => ({
  url: `/pages/user/userPage?user=${JSON.stringify({
    userSid,
    description,
    imageUrl,
  })}`,
});
// tab
export const CREATE_ITEM_TAB = (itemId) => ({
  url: "/pages/createItemPage?itemId=" + JSON.stringify(itemId),
});
export const LANDING_TAB = () => ({
  url: "/pages/index/tabbar",
});
export const ME_TAB = () => ({ url: "/pages/index/me" });

export function getRouterJsonParam(option, paramName) {
  return JSON.parse(option[paramName]);
}
