import queryParams from "../uview-ui/libs/function/queryParams";

const GET_METHOD = "GET";
const POST_METHOD = "POST";
const PUT_METHOD = "PUT";
const DELETE_METHOD = "DELETE";

const PUBLIC_AUTH = "/login/v1";
const PUBLIC_CATEGORY = "/public/category/v1";
const PUBLIC_SUB_CATEGORY = "/public/sub-category/v1";
const PUBLIC_ITEM = "/public/item/v1";

const USER_ADDRESS = "/user/address/v1";
const USER_BANK_ACCOUNT = "/user/bank_account/v1";
const USER_BUSINESS = "/user/business/v1";
const USER_CASH_OUT = "/user/cash_out/v1";
const USER_IMAGE_UPLOAD = "/user/image_upload/v1";
const USER_ITEM = "/user/item/v1";
const USER_MPAY_ORDER = "/user/mpay_order/v1";
const USER_ORDER = "/user/order/v1";
const USER_PROFILE = "/user_profile/v1";
const USER_SAVE_ITEM = "/user/user_save_item/v1";
const USER_VIEW_ITEM = "/user/user_view_item/v1";

// Address
export const CREATE_ADDRESS = (address) => ({
  authenticatedRequest: true,
  body: JSON.stringify(address),
  method: POST_METHOD,
  timer: {
    title: "創建地址",
    length: 1000,
  },
  url: USER_ADDRESS,
});

export const DELETE_ADDRESS = (address) => ({
  authenticatedRequest: true,
  body: JSON.stringify(address),
  method: DELETE_METHOD,
  timer: {
    title: "删除地址",
    length: 1000,
  },
  url: USER_ADDRESS,
});

export const GET_ADDRESS_ALL = () => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_ADDRESS + "/all",
});

export const UPDATE_ADDRESS = (address) => ({
  authenticatedRequest: true,
  body: JSON.stringify(address),
  method: PUT_METHOD,
  timer: {
    title: "更新地址",
    length: 1000,
  },
  url: USER_ADDRESS,
});

// Auth
export const LOGIN = (loginRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(loginRequest),
  method: POST_METHOD,
  url: PUBLIC_AUTH + "/sms_number_password",
});

export const REQUEST_VERIFICATION = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: POST_METHOD,
  url: PUBLIC_AUTH + "/request_verification",
});

export const VERIFY = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: POST_METHOD,
  url: PUBLIC_AUTH + "/verify",
});

export const FORGOT_PASSWORD_REQUEST_VERIFICATION = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: POST_METHOD,
  url: PUBLIC_AUTH + "/forgot_password_request",
});

export const FORGOT_PASSWORD_VERIFY = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: POST_METHOD,
  url: PUBLIC_AUTH + "/forgot_password_verify",
});

// Bank Account
export const CREATE_BANK_ACCOUNT = (bankAccount) => ({
  authenticatedRequest: true,
  body: JSON.stringify(bankAccount),
  method: POST_METHOD,
  timer: {
    title: "創建銀行賬戶",
    length: 1000,
  },
  url: USER_BANK_ACCOUNT,
});

export const DELETE_BANK_ACCOUNT = (bankAccount) => ({
  authenticatedRequest: true,
  body: JSON.stringify(bankAccount),
  method: DELETE_METHOD,
  timer: {
    title: "删除銀行賬戶",
    length: 1000,
  },
  url: USER_BANK_ACCOUNT,
});

export const GET_BANK_ACCOUNT_ALL = () => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_BANK_ACCOUNT + "/all",
});

export const UPDATE_BANK_ACCOUNT = (bankAccount) => ({
  authenticatedRequest: true,
  body: JSON.stringify(bankAccount),
  method: PUT_METHOD,
  timer: {
    title: "更新銀行賬戶",
    length: 1000,
  },
  url: USER_BANK_ACCOUNT,
});

// Business
export const CREATE_BUSINESS = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: POST_METHOD,
  timer: {
    title: "提交申請中",
    length: 2000,
  },
  url: USER_BUSINESS,
});

export const GET_BUSINESS_ALL = () => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  timer: {
    title: "獲取企業中",
    length: 2000,
  },
  url: USER_BUSINESS + "/all",
});

export const UPDATE_BUSINESS = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: PUT_METHOD,
  timer: {
    title: "提交申請中",
    length: 2000,
  },
  url: USER_BUSINESS,
});

// Cash Out
export const CREATE_CASH_OUT = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: POST_METHOD,
  timer: {
    title: "提交轉賬中",
    length: 2000,
  },
  url: USER_CASH_OUT,
});

export const GET_CASH_OUT_PAGINATION = (pageRequest, pageSize) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_CASH_OUT + `/query?pageRequest=${pageRequest}&pageSize=${pageSize}`,
});

// Category
export const GET_CATEGORY_ALL = () => ({
  authenticatedRequest: false,
  method: GET_METHOD,
  url: PUBLIC_CATEGORY + "/all",
});

// Image Upload
export const GET_IMAGE_UPLOAD_TOKEN = () => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_IMAGE_UPLOAD,
});

// Item
export const CREATE_ITEM = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: POST_METHOD,
  timer: {
    title: "創建中",
    length: 1000,
  },
  url: USER_ITEM,
});

export const DELETE_ITEM = (itemId) => ({
  authenticatedRequest: true,
  method: DELETE_METHOD,
  timer: {
    title: "删除中",
    length: 1000,
  },
  url: USER_ITEM + `/${itemId}`,
});

export const GET_CREATED_ITEMS = (pageRequest, pageSize) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url:
    USER_ITEM +
    `/created_items_pagination?pageRequest=${pageRequest}&pageSize=${pageSize}`,
});

export const GET_ITEM = (itemId) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: PUBLIC_ITEM + `/${itemId}`,
});

/**
 * this will return user save status
 * @param {*} pageRequest
 * @param {*} pageSize
 * @returns
 */
export const GET_ITEMS = (pageRequest, pageSize, categoryId) => ({
  authenticatedRequest: false,
  method: GET_METHOD,
  url:
    PUBLIC_ITEM +
    `?pageRequest=${pageRequest}&pageSize=${pageSize}&categoryId=${
      categoryId ? categoryId : 0
    }`,
});

export const GET_ITEMS_BY_DESCRIPTION_LIKE = (
  descriptionLike,
  pageRequest,
  pageSize
) => ({
  authenticatedRequest: false,
  method: GET_METHOD,
  url:
    PUBLIC_ITEM +
    `/query_description?descriptionLike=${descriptionLike}&pageRequest=${pageRequest}&pageSize=${pageSize}`,
});

export const GET_ITEMS_BY_USER_ID = (userSid, pageRequest, pageSize) => ({
  authenticatedRequest: false,
  method: GET_METHOD,
  url:
    PUBLIC_ITEM +
    `/user/${userSid}?pageRequest=${pageRequest}&pageSize=${pageSize}`,
});

export const UPDATE_ITEM = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: PUT_METHOD,
  timer: {
    title: "更新中",
    length: 1000,
  },
  url: USER_ITEM,
});

// Mpay Order
export const REQUEST_MPAY_PAYMENT_INFO = (orderId, paymentChannel) => ({
  authenticatedRequest: true,
  method: POST_METHOD,
  url: USER_MPAY_ORDER + `/${orderId}?paymentChannel=${paymentChannel}`,
});

// Order
export const CREATE_ORDER = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: POST_METHOD,
  url: USER_ORDER,
});

export const GET_BUYER_INFO = (orderId) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_ORDER + `/${orderId}/buyer_info`,
});

export const GET_BUYER_ORDERS_BY_ORDER_STATUS_PAGINATION = (
  orderStatuses,
  pageRequest,
  direction,
  orderBy
) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url:
    USER_ORDER +
    "/get_buy_orders_by_order_status" +
    queryParams({ orderStatuses, pageRequest }, true, "comma"),
});

export const GET_BUYER_PENDING_ORDERS = () => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_ORDER + "/get_buyer_pending_orders",
});

export const GET_ORDER_BY_ID = (orderId) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_ORDER + `/${orderId}`,
});

export const GET_SELLER_PENDING_ORDERS = () => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_ORDER + "/get_seller_pending_orders",
});

export const GET_SELLER_ORDERS_BY_ORDER_STATUS = (
  orderStatuses,
  pageRequest,
  direction,
  orderBy
) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url:
    USER_ORDER +
    "/get_seller_orders_by_order_status" +
    queryParams({ orderStatuses, pageRequest }, true, "comma"),
});

export const UPDATE_ORDER_AS_DEIVERED_BY_BUYER = (orderId) => ({
  authenticatedRequest: true,
  method: PUT_METHOD,
  url: USER_ORDER + `/${orderId}/delivered`,
});

export const UPDATE_ORDER_AS_SHIPPED_BY_SELLER = (orderId) => ({
  authenticatedRequest: true,
  method: PUT_METHOD,
  url: USER_ORDER + `/${orderId}/shipped`,
});

// Sub Category
export const GET_SUB_CATEGORY_BY_CATEGORY = (categoryId) => ({
  authenticatedRequest: false,
  method: GET_METHOD,
  url: PUBLIC_SUB_CATEGORY + `/${categoryId}/all`,
});

// User Profile
export const GET_USER_PROFILE = () => ({
  authenticatedRequest: false,
  method: GET_METHOD,
  url: USER_PROFILE,
});

export const LINK_USER_PUSH_NOTIFICATION_TOKEN = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: PUT_METHOD,
  url: USER_PROFILE + "/link_push_notification_token",
});

export const UPDATE_USER_PASSWORD = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: PUT_METHOD,
  url: USER_PROFILE + "/change_password",
});

export const UPDATE_USER_PROFILE = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: PUT_METHOD,
  url: USER_PROFILE + "/update_phoenix_user_profile",
});

// User Save Item
export const CREATE_USER_SAVE_ITEM = (itemId) => ({
  authenticatedRequest: true,
  method: POST_METHOD,
  url: USER_SAVE_ITEM + `/item/${itemId}`,
});

export const DELETE_USER_SAVE_ITEM = (itemId) => ({
  authenticatedRequest: true,
  method: DELETE_METHOD,
  url: USER_SAVE_ITEM + `/item/${itemId}`,
});

export const GET_USER_SAVE_ITEM = (pageRequest, pageSize) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url:
    USER_SAVE_ITEM +
    `/pagination_by_user?pageRequest=${pageRequest}&pageSize=${pageSize}`,
});

export const GET_USER_SAVE_ITEM_BY_ITEM_ID = (itemId) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_SAVE_ITEM + `/item/${itemId}`,
});

// User View Item
export const DELETE_USER_VIEW_ITEM = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: DELETE_METHOD,
  url: USER_VIEW_ITEM,
});

export const GET_USER_VIEW_ITEM = (pageRequest, pageSize) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url:
    USER_VIEW_ITEM +
    `/pagination_by_user?pageRequest=${pageRequest}&pageSize=${pageSize}`,
});
