import { GET_IMAGE_UPLOAD_TOKEN } from "../service/service";

export async function uploadMedia(blobUrl, execute) {
  const { token, uploadUrl } = await execute(GET_IMAGE_UPLOAD_TOKEN());
  const blob = await fetch(blobUrl).then((r) => r.blob());
  const formData = new FormData();
  formData.append("token", token);
  formData.append("file", blob);
  const response = await fetch(uploadUrl, {
    body: formData,
    method: "POST",
    mode: "cors",
  });
  const jsonResponse = await response.json();
  return jsonResponse;
}
