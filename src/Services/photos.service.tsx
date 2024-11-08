import axios from "axios";
import { Photo, PhotoResponse, PhotosFilter } from "../types/photos";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}/externalapi`,
});

export const getPhotos = async (
  params: PhotosFilter = {}
): Promise<PhotoResponse> => {
  const response = await instance.get("/photos", { params });
  return response.data;
};

export const getPhoto = async (id: number): Promise<Photo> => {
  const response = await instance.get(`/photos/${id}`);
  return response.data;
};
