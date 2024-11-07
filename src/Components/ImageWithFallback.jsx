import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/image-with-fallback.css";
import placeholderImage from "../images/placeholder-unsplash.jpg";
import { STATUSES } from "../constants";

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgState, setImgState] = useState({
    status: STATUSES?.IN_PROGRESS,
    src,
  });

  const handleImageLoad = () => {
    setImgState((prevState) => ({ ...prevState, status: STATUSES?.LOADED }));
  };

  const handleError = () => {
    setImgState((prevState) => ({
      ...prevState,
      //   src: `${process.env.PUBLIC_URL}/placeholder-unsplash.jpg`,
      src: placeholderImage,
      status: STATUSES?.LOADED,
    }));
  };

  return (
    <div className={`relish-app-image-with-fallback ${className ?? ""}`}>
      {imgState?.status === STATUSES?.IN_PROGRESS && (
        <div
          className="relish-app-image-with-fallback__loader"
          role="status"
          aria-live="polite"
          aria-label="Image is loading, please wait"
        >
          <span className="relish-app-image-with-fallback__spinner"></span>
        </div>
      )}
      <img
        className="relish-app-image-with-fallback__image"
        src={imgState?.src}
        alt={alt || "Image not available"}
        loading="lazy"
        onError={handleError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageWithFallback;
