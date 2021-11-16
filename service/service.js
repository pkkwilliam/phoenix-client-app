const PUBLIC_CATEGORY = "/public/category/v1";
const PUBLIC_SUB_CATEGORY = "/public/sub-category/v1";
const PUBLIC_ITEM = "public/item/v1";

const USER_IMAGE_UPLOAD = "/user/image_upload/v1";

// Category
export const GET_CATEGORY_ALL = () => ({
  authenticatedRequest: false,
  method: "GET",
  url: PUBLIC_CATEGORY + "/all",
});

// Image Upload
export const GET_IMAGE_UPLOAD_TOKEN = () => ({
  authenticatedRequest: false,
  method: "GET",
  url: USER_IMAGE_UPLOAD,
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
