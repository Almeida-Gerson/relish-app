import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}/externalapi`,
});

export const getPhotos = async (params: any = {}) => {
  return instance.get("/photos", { params });
};

export const getPhoto = async (id: number) => {
  return instance.get(`/photos/${id}`);
};
