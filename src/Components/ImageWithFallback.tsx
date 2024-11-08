import { useState } from "react";
import "../styles/image-with-fallback.css";
import placeholderImage from "../assets/images/placeholder-unsplash.jpg";
import { STATUSES } from "../constants";

const ImageWithFallback = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  const [imgState, setImgState] = useState<{
    status: string;
    src: string;
  }>({
    status: STATUSES?.IN_PROGRESS,
    src,
  });

  const handleImageLoad = () => {
    setImgState({ ...imgState, status: STATUSES?.LOADED });
  };

  const handleError = () => {
    setImgState({ src: placeholderImage, status: STATUSES?.LOADED });
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

export default ImageWithFallback;
