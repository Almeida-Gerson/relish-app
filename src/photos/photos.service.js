import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/externalapi`,
});

export const getPhotos = async (params = {}) => {
  return instance.get("/photos", { params });
};

export const getPhoto = async (id) => {
  return instance.get(`/photos/${id}`);
};
