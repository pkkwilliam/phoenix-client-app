const GET_METHOD = "GET";
const POST_METHOD = "POST";
const PUT_METHOD = "PUT";
const DELETE_METHOD = "DELETE";

const PUBLIC_AUTH = "/login/v1";
const PUBLIC_CATEGORY = "/public/category/v1";
const PUBLIC_SUB_CATEGORY = "/public/sub-category/v1";
const PUBLIC_ITEM = "/public/item/v1";

const USER_ADDRESS = "/user/address/v1";
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
  url: USER_ADDRESS,
});

export const DELETE_ADDRESS = (address) => ({
  authenticatedRequest: true,
  body: JSON.stringify(address),
  method: DELETE_METHOD,
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
  url: USER_ITEM,
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

// Mpay Order
export const CREATE_MPAY_ORDER = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: POST_METHOD,
  url: USER_MPAY_ORDER,
});

// Order
export const GET_BUYER_INFO = (orderId) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url: USER_ORDER + `/${orderId}/buyer_info`,
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

// User Save Item
export const DELETE_USER_SAVE_ITEM = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: DELETE_METHOD,
  url: USER_SAVE_ITEM,
});

export const CREATE_USER_SAVE_ITEM = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: POST_METHOD,
  url: USER_SAVE_ITEM,
});

export const GET_USER_SAVE_ITEM = (pageRequest, pageSize) => ({
  authenticatedRequest: true,
  method: GET_METHOD,
  url:
    USER_SAVE_ITEM +
    `/pagination_by_user?pageRequest=${pageRequest}&pageSize=${pageSize}`,
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
