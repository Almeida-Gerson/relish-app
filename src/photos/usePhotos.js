import { useCallback, useEffect, useState } from "react";
import { getPhotos as getPhotosService } from "./photos.service";
import { defaultFilters, STATUSES } from "../constants";

export const usePhotos = () => {
  const [photosState, setPhotosState] = useState({
    photos: [],
    filters: { ...defaultFilters },
    status: STATUSES?.IDLE,
    filtersChanged: true,
  });

  const getPhotos = useCallback(async () => {
    try {
      if (
        photosState?.status !== STATUSES?.IN_PROGRESS &&
        photosState?.filtersChanged
      ) {
        setPhotosState((prevState) => ({
          ...prevState,
          status: STATUSES?.IN_PROGRESS,
          filtersChanged: false,
        }));
        const { data } = await getPhotosService(photosState?.filters);
        setPhotosState((prevState) => ({
          ...prevState,
          photos: data || [],
          status: STATUSES?.IDLE,
        }));
      }
    } catch (error) {
      console.log("🚀 ~ getPhotos ~ error:", error);
      setPhotosState((prevState) => ({
        ...prevState,
        status: STATUSES?.ERROR,
      }));
    }
  }, [photosState?.filters, photosState?.filtersChanged, photosState?.status]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  const setFilters = useCallback(
    (filters = {}) => {
      if (photosState?.status !== STATUSES?.IN_PROGRESS) {
        setPhotosState((prevState) => ({
          ...prevState,
          filters: { ...defaultFilters, ...filters },
          filtersChanged: true,
        }));
      }
    },
    [photosState?.status]
  );

  return { photosState, getPhotos, setFilters };
};
