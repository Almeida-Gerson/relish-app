import React, { useState } from "react";
import PropTypes from "prop-types";
import placeholderImage from "../images/placeholder-unsplash.jpg";

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(placeholderImage);
  };
  return (
    <img
      className={className ?? ""}
      src={imgSrc}
      alt={alt || "Image not available"}
      onError={handleError}
    />
  );
};

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageWithFallback;
