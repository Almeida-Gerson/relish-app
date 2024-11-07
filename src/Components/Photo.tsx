import ImageWithFallback from "./ImageWithFallback";
import "../styles/photo.css";

const Photo = ({
  id,
  url,
  thumbnailUrl,
  title,
  album,
}: {
  id: number;
  url: string;
  thumbnailUrl: string;
  title: string;
  album: {
    id: number;
    title: string;
    user: {
      id: number;
      email: string;
      name: string;
    };
  };
}) => (
  <div key={id} className="relish-app-photo">
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

export default Photo;
