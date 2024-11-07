import { usePhotos } from "../Hooks/usePhotos";
import Photo from "../Components/Photo";
import Filters from "../Components/Filters";
import Pagination from "../Components/Pagination";
import { STATUSES } from "../constants";
import "normalize.css";
import "../styles/app.css";
import "../styles/colors.css";
import "../styles/photos.css";

const PhotosScreen = () => {
  const { photosState, setFilters, handlePageChange } = usePhotos();

  const handleApplyFilter = (filters = {}) => {
    setFilters(filters);
  };

  const renderContent = () => {
    if (photosState?.status === STATUSES?.IN_PROGRESS) {
      return (
        <div className="relish-app__photos-content">
          <div
            className="relish-app__photos-content-loader"
            role="status"
            aria-live="polite"
            aria-label="Image is loading, please wait"
          >
            <span className="relish-app__photos-content-spinner"></span>
          </div>
        </div>
      );
    }

    if (
      photosState?.status === STATUSES?.LOADED &&
      !photosState?.photos?.length
    ) {
      return <div className="relish-app__photos-content">Not Photos Found</div>;
    }

    return (
      <div className="relish-app__photos-content">
        <div className="relish-app__photos-container">
          {photosState?.photos?.map(
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
          )}
        </div>
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

  return (
    <div className="relish-app">
      <h1>Photos</h1>
      <div className="relish-app__filters-container">
        <Filters
          filters={photosState?.filters}
          total={photosState?.pagination?.total}
          current={photosState?.pagination?.current}
          onPageChange={handlePageChange}
          onApplyFilter={handleApplyFilter}
        />
      </div>
      {renderContent()}
    </div>
  );
};

export default PhotosScreen;
