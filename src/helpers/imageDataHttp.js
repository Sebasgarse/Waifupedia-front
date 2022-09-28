import Axios from "axios";

const URL_BASE = "http://localhost:3001/images";

export const imageDataUpload = async (data) => {
  if (!data) return null;

  const url = URL_BASE;

  try {
    const resp = await Axios({ url, method: "post", data });

    if (resp.status !== 201)
      throw new Error("No se pudo subir informacion de imagen");

    const waifu = resp.data;
    console.log(waifu);
    return waifu;
  } catch (error) {
    console.error(error);
    // throw new Error(error.message);
    return null;
  }
};
