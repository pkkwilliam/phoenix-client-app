const PUBLIC_AUTH = "/login/v1";
const PUBLIC_CATEGORY = "/public/category/v1";
const PUBLIC_SUB_CATEGORY = "/public/sub-category/v1";
const PUBLIC_ITEM = "public/item/v1";

const USER_IMAGE_UPLOAD = "/user/image_upload/v1";
const USER_ITEM = "/user/item/v1";

const SELLER_ITEM = "/user/item/sell/v1";

// Auth
export const LOGIN = (loginRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(loginRequest),
  method: "POST",
  url: PUBLIC_AUTH + "/sms_number_password",
});

export const REQUEST_VERIFICATION = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: "POST",
  url: PUBLIC_AUTH + "/request_verification",
});

export const VERIFY = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: "POST",
  url: PUBLIC_AUTH + "/verify",
});

export const FORGOT_PASSWORD_REQUEST_VERIFICATION = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: "POST",
  url: PUBLIC_AUTH + "/forgot_password_request",
});

export const FORGOT_PASSWORD_VERIFY = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: "POST",
  url: PUBLIC_AUTH + "/forgot_password_verify",
});

// Category
export const GET_CATEGORY_ALL = () => ({
  authenticatedRequest: false,
  method: "GET",
  url: PUBLIC_CATEGORY + "/all",
});

// Image Upload
export const GET_IMAGE_UPLOAD_TOKEN = () => ({
  authenticatedRequest: true,
  method: "GET",
  url: USER_IMAGE_UPLOAD,
});

// Item
export const CREATE_ITEM = (request) => ({
  authenticatedRequest: false,
  body: JSON.stringify(request),
  method: "POST",
  url: SELLER_ITEM,
});

// Sub Category
export const GET_SUB_CATEGORY_BY_CATEGORY = (categoryId) => ({
  authenticatedRequest: false,
  method: "GET",
  url: PUBLIC_SUB_CATEGORY + `/${categoryId}/all`,
});

// Parcel
export const GET_ITEM_ALL = () => ({
  authenticatedRequest: false,
  method: "GET",
  url: PARCEL_SERVICE + "/pagination",
});
