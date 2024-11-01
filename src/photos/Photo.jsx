import React from "react";
import PropTypes from "prop-types";
import "../styles/photo.css";

const Photo = ({ id, url, thumbnailUrl, title, album }) => {
  return (
    <div className="relish-app-photo">
      <p className="relish-app-photo__title">{title}</p>
      <img className="relish-app-photo__image" src={thumbnailUrl} alt={title} />
      <p id="info-list-title" aria-hidden="true">
        Information:
      </p>
      <ul aria-labelledby="info-list-title">
        <li>
          <strong>album title:</strong> {album?.title}
        </li>
        <li>
          <strong>user name:</strong> {album?.user?.name}
        </li>
        <li>
          {" "}
          <strong>user email:</strong> {album?.user?.email}
        </li>
      </ul>
    </div>
  );
};

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  albumId: PropTypes.number,
  album: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};

export default Photo;
