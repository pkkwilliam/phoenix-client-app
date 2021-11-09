const LOIGN_SERVICE = "/login/v1";
const PARCEL_SERVICE = "/user/parcel/v1";
const PUBLIC_COMPANY_CUSTOMISE = "/public/company_customise/v1";
const PUBLIC_PARCEL_SERVICE = "/public/parcel/v1";
const PUBLIC_ANNOUNCEMENT_SERVICE = "/public/announcement/v1";
const PUBLIC_CAROUSEL_IMAGE_SERVICE = "/public/carousel_image/v1";
const PUBLIC_SHOP_SERVICE = "/public/shop/v1";
const PUBLIC_SMS_VERIFICATION_SERVICE = "/public/sms_verification/v1";
const USER_POINT_SERVICE = "/user/point/v1";
const USER_PROFILE_SERVICE = "/user_profile/v1";

// Announcement
export const GET_ANNOUNCEMENT_ALL = () => ({
  authenticatedRequest: false,
  method: "GET",
  url: PUBLIC_ANNOUNCEMENT_SERVICE + "/all",
});

// Auth
export const LOGIN = (loginRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(loginRequest),
  method: "POST",
  url: LOIGN_SERVICE + "/sms_number_password",
});

export const REQUEST_VERIFICATION = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: "POST",
  url: PUBLIC_SMS_VERIFICATION_SERVICE + "/request_verification",
});

export const VERIFY = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: "POST",
  url: PUBLIC_SMS_VERIFICATION_SERVICE + "/verify",
});

export const FORGOT_PASSWORD_REQUEST_VERIFICATION = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: "POST",
  url: PUBLIC_SMS_VERIFICATION_SERVICE + "/forgot_password_request",
});

export const FORGOT_PASSWORD_VERIFY = (smsRequest) => ({
  authenticatedRequest: false,
  body: JSON.stringify(smsRequest),
  method: "POST",
  url: PUBLIC_SMS_VERIFICATION_SERVICE + "/forgot_password_verify",
});

// Carousel Image
export const GET_CAROUSEL_IMAGE_ALL = () => ({
  authenticatedRequest: false,
  method: "GET",
  url: PUBLIC_CAROUSEL_IMAGE_SERVICE + "/all",
});

// Company Customise
export const GET_COMPANY_CUSTOMISE = () => ({
  authenticatedRequest: false,
  method: "GET",
  url: PUBLIC_COMPANY_CUSTOMISE,
});

// Parcel
export const GET_PARCEL_ALL = () => ({
  authenticatedRequest: true,
  method: "GET",
  url: PARCEL_SERVICE + "/all",
});

export const GET_PARCEL_ESTIMATE = (
  weight,
  length,
  width,
  height,
  shopCostFormula
) => ({
  authenticatedRequest: false,
  method: "GET",
  url:
    PUBLIC_PARCEL_SERVICE +
    `/estimate_cost?weight=${weight}&length=${length}&width=${width}&height=${height}&shopCostFormula=${shopCostFormula}`,
});

export const MATCH_BAD_PARCEL = (originalTrackingNumber, shopId) => ({
  authenticatedRequest: true,
  method: "POST",
  url:
    PARCEL_SERVICE +
    `/match_bad_parcel?originalTrackingNumber=${originalTrackingNumber}&shopId=${shopId}`,
});

// Point
export const CONVERT_ALL_POINT_TO_BALANCE = () => ({
  authenticatedRequest: true,
  method: "POST",
  url: USER_POINT_SERVICE,
});

// Profile
export const GET_USER_PROFILE = () => ({
  authenticatedRequest: true,
  method: "GET",
  url: USER_PROFILE_SERVICE,
});

export const CHANGE_PASSWORD = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: "PUT",
  url: USER_PROFILE_SERVICE + "/change_password",
});

export const UPDATE_USER_PROFILE = (request) => ({
  authenticatedRequest: true,
  body: JSON.stringify(request),
  method: "PUT",
  url: USER_PROFILE_SERVICE + "/update_user_profile",
});

// Shop
export const GET_ACTIVE_SHOP = () => ({
  authenticatedRequest: false,
  method: "GET",
  url: PUBLIC_SHOP_SERVICE + "/all_active",
});
