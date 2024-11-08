import { Pagination, PhotosFilter } from "./types/photos";

export const defaultFilters: PhotosFilter = {
  title: "",
  "album.title": "",
  "album.user.email": "",
  limit: 25,
  offset: 0,
};

export const defaultPagination: Pagination = {
  total: 0,
  current: 1,
};

export const STATUSES = {
  IDLE: "IDLE",
  IN_PROGRESS: "IN_PROGRESS",
  ERROR: "ERROR",
  LOADED: "LOADED",
};
