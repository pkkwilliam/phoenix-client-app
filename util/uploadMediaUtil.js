import { GET_IMAGE_UPLOAD_TOKEN } from "../service/service";

export async function uploadMedia(blobUrl, execute) {
  const { token, uploadUrl } = await execute(GET_IMAGE_UPLOAD_TOKEN());
  const jsonResponse = await new Promise((resolve, reject) => {
    uni.uploadFile({
      filePath: blobUrl,
      formData: {
        token,
      },
      name: "file",
      header: {
        "content-type": "multipart/form-data",
      },
      url: uploadUrl,
      success: (response) => {
        const { data, statusCode } = response;
        if (statusCode < 300) {
          console.log("upload success");
          return resolve(response);
        } else {
          return reject("failed");
        }
      },
    });
  });
  const { accessUrl, key } = JSON.parse(jsonResponse.data);
  return { mediaAccessUrl: `${accessUrl}/${key}` };
}
