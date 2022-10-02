import Axios from "axios";
import { Picture } from "../interfaces/Pictures";

const URL_BASE = "http://localhost:3001/pictures";

export const imageDataUpload = async (data: Picture[]): Promise<Array<any>> => {
  if (!data) return null;

  const url = URL_BASE;

  try {
    const resp = await Axios({ url, method: "post", data });

    if (resp.status !== 201)
      throw new Error("No se pudo subir informacion de imagen");

    const waifu = resp.data;
    return waifu;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllImages = async (): Promise<Picture[]> => {
  const url = URL_BASE;
  try {
    const resp = await Axios({ url, method: "get" });

    if (resp.status !== 200) {
      console.warn(resp);
      throw new Error("No se pudo recibir informacion de imagen");
    }

    const waifu = resp.data;
    return waifu;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteImageFromServer = async (id: number): Promise<boolean> => {
  const url = URL_BASE + "/" + id;

  try {
    const resp = await Axios({ url, method: "delete" });

    if (resp.status !== 200) {
      console.warn(resp);
      throw new Error("No se pudo Eliminar imagen");
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const EditImageFromServer = async (data): Promise<boolean> => {
  const url = URL_BASE;

  try {
    const resp = await Axios({ url, method: "patch", data });

    if (resp.status !== 200) {
      console.warn(resp);
      throw new Error("No se pudo Eliminar imagen");
    }

    return resp.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getRandomImage = async (tag: string = null): Promise<any> => {
  const url = URL_BASE + "/rand";

  try {
    let resp;
    if (tag) {
      resp = await Axios({ url, method: "post", data: { tag } });
    } else {
      resp = await Axios({ url, method: "get" });
    }

    // if (resp.status !== 200 || resp.status !== 201) {
    //   console.warn(resp);
    //   throw new Error("No se pudo conseguir imagen");
    // }

    return resp.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
