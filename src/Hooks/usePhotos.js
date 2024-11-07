import { useCallback, useEffect, useState } from "react";
import { getPhotos as getPhotosService } from "../Services/photos.service";
import { defaultFilters, defaultPagination, STATUSES } from "../constants";

export const usePhotos = () => {
  const [photosState, setPhotosState] = useState({
    photos: [],
    pagination: { ...defaultPagination },
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
          photos: data?.photos || [],
          pagination: { ...prevState?.pagination, total: data?.total || 0 },
          status: STATUSES?.LOADED,
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
          pagination: { ...defaultPagination },
          filtersChanged: true,
        }));
      }
    },
    [photosState?.status]
  );

  const handlePageChange = (page) => {
    if (photosState?.status !== STATUSES?.IN_PROGRESS) {
      setPhotosState((prevState) => {
        const newOffset = (page - 1 || 0) * prevState?.filters?.limit;
        return {
          ...prevState,
          filters: { ...prevState?.filters, offset: newOffset },
          pagination: { ...prevState?.pagination, current: page },
          filtersChanged: true,
        };
      });
    }
  };

  return { photosState, getPhotos, setFilters, handlePageChange };
};
