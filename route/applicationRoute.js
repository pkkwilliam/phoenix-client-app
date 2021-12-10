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
export const BUYER_SOLD_ORDER_DETAIL_PAGE = (orderObject) => ({
  url:
    "/pages/soldOrder/buyerSoldOrderDetailPage?order=" +
    JSON.stringify(orderObject),
});
export const CHANGE_PASSWORD_PAGE = () => ({
  url: "/pages/changePasswordPage",
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
export const ORDER_CONFIRM_PAGE = () => ({
  url: "/pages/orderConfirmPage",
});
export const PARCEL_LIST_PAGE = () => ({ url: "/pages/parcelListPage" });
export const PICKUP_CODE_PAGE = () => ({ url: "/pages/pickupCodePage" });
export const REGISTER_PAGE = () => ({ url: "/pages/registerPage" });
export const SELLER_SOLD_ORDER_DETAIL_PAGE = (orderObject) => ({
  url:
    "/pages/soldOrder/sellerSoldOrderDetailPage?order=" +
    JSON.stringify(orderObject),
});
export const SHOP_LIST_PAGE = () => ({ url: "/pages/shopListPage" });
export const USER_ORDER_PAGE = () => ({
  url: "/pages/user/userOrderPage",
});
export const USER_POST_PAGE = () => ({
  url: "/pages/user/userPostPage",
});
export const USER_SAVE_ITEM_PAGE = () => ({
  url: "/pages/user/userSaveItemPage",
});
export const USER_SOLD_PAGE = () => ({
  url: "/pages/user/userSoldPage",
});
export const USER_VIEW_ITEM_PAGE = () => ({
  url: "/pages/user/userViewItemPage",
});
export const WORKBENCH_PAGE = () => ({
  url: "/pages/workbenchPage",
});
// tab
export const CREATE_ITEM_TAB = () => ({ url: "/pages/createItemPage" });
export const LANDING_TAB = () => ({ url: "/pages/index/tabbar" });
export const ME_TAB = () => ({ url: "/pages/index/me" });

export function getRouterJsonParam(option, paramName) {
  return JSON.parse(option[paramName]);
}
