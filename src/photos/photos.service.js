import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/externalapi`,
});

export const getPhotos = (params = {}) => {
  return instance.get("/photos", { params });
};

export const getPhoto = (id) => {
  return instance.get(`/photos/${id}`);
};
