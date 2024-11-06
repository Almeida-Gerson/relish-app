import PropTypes from "prop-types";
import ImageWithFallback from "./ImageWithFallback";
import "../styles/photo.css";

const Photo = ({ id, url, thumbnailUrl, title, album }) => (
  <div className="relish-app-photo">
    <p className="relish-app-photo__title">{title}</p>
    <ImageWithFallback
      className="relish-app-photo__image"
      src={thumbnailUrl || url}
      alt={title}
    />
    <p id="info-list-title" aria-hidden="true">
      Information:
    </p>
    <ul aria-labelledby="info-list-title">
      <li>
        <strong>Album Title:</strong> {album?.title}
      </li>
      <li>
        <strong>User Name:</strong> {album?.user?.name}
      </li>
      <li>
        <strong>User Email:</strong> {album?.user?.email}
      </li>
    </ul>
  </div>
);

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
