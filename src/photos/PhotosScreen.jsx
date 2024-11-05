import React, { useCallback } from "react";
import { usePhotos } from "./usePhotos";
import Photo from "./Photo";
import "normalize.css";
import "../styles/photos.css";
import Filters from "./Filters";

const PhotosScreen = () => {
  const { photosState, setFilters } = usePhotos();

  const handleApplyFilter = (filters = {}) => {
    setFilters(filters);
  };

  const renderPhotos = useCallback(() => {
    return photosState?.photos?.map(
      ({ id, url, thumbnailUrl, title, album }) => (
        <Photo
          key={id}
          id={id}
          url={url}
          thumbnailUrl={thumbnailUrl}
          title={title}
          album={album}
        />
      )
    );
  }, [photosState?.photos]);

  return (
    <div className="relish-app">
      <h1>Photos</h1>
      <div className="relish-app__filters-container">
        <Filters
          filters={photosState?.filters}
          onApplyFilter={handleApplyFilter}
        />
      </div>
      <div className="relish-app__photos-container">{renderPhotos()}</div>
    </div>
  );
};

export default PhotosScreen;
