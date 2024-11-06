import { useCallback } from "react";
import { usePhotos } from "./usePhotos";
import Photo from "./Photo";
import "normalize.css";
import Filters from "./Filters";
import Pagination from "./Pagination";
import "../styles/colors.css";
import "../styles/photos.css";

const PhotosScreen = () => {
  const { photosState, setFilters, handlePageChange } = usePhotos();

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
      <div className="relish-app__pagination-container">
        <Pagination
          total={photosState?.pagination?.total}
          current={photosState?.pagination?.current}
          pageSize={photosState?.filters?.limit}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PhotosScreen;
