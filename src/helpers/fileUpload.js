export const fileUpload = async (file) => {
  if (!file) return null;

  const URL = "https://api.cloudinary.com/v1_1/dgk4bxvsr/image/upload";

  const formData = new FormData();
  formData.append("upload_preset", "waifupedia");
  formData.append("file", file);

  try {
    const resp = await fetch(URL, { method: "POST", body: formData });
    if (!resp.ok) throw new Error("No se pudo subir imagen");

    const { original_filename, width, height, secure_url } = await resp.json();
    // return cloudResp;
    return {
      title: original_filename,
      size_x: width,
      size_y: height,
      url: secure_url,
    };
  } catch {
    // console.error(error);
    // throw new Error(error.message);
    return null;
  }
};
