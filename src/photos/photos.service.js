import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/externalapi",
});

export const getPhotos = (params = {}) => {
  return instance.get("/photos", { params });
};

export const getPhoto = (id) => {
  return instance.get(`/photos/${id}`);
};
