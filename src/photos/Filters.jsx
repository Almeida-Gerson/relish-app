import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import "../styles/filters.css";
import { defaultFilters } from "../constants";

const Filters = ({ filters = defaultFilters, onApplyFilter = () => {} }) => {
  const [newFiltersState, setNewFiltersState] = useState({
    ...defaultFilters,
    ...filters,
  });

  const handleChange = useCallback(
    (key) => (e) => {
      setNewFiltersState((prevState) => ({
        ...prevState,
        [key]: e.target.value,
      }));
    },
    []
  );

  const handleSubmit = (e) => {
    e?.preventDefault();
    onApplyFilter(newFiltersState);
  };

  return (
    <form className="relish-app-filters" onSubmit={handleSubmit}>
      <div className="relish-app-filters__input-container relish-app-filters__item">
        <label htmlFor="photo_title">Photo Title</label>
        <input
          id="photo_title"
          name="photo_title"
          type="text"
          value={newFiltersState?.title}
          onChange={handleChange("title")}
        />
      </div>
      <div className="relish-app-filters__input-container relish-app-filters__item">
        <label htmlFor="album_title">Album Title</label>
        <input
          id="album_title"
          name="album_title"
          type="text"
          value={newFiltersState?.["album.title"]}
          onChange={handleChange("album.title")}
        />
      </div>
      <div className="relish-app-filters__input-container relish-app-filters__item">
        <label htmlFor="user_email">User Email</label>
        <input
          id="user_email"
          name="user_email"
          type="email"
          value={newFiltersState?.["album.user.email"]}
          onChange={handleChange("album.user.email")}
        />
      </div>
      <button
        className="relish-app-filters__button relish-app-filters__item"
        type="submit"
      >
        Apply Filter
      </button>
    </form>
  );
};

Filters.propTypes = {
  filters: PropTypes.shape({
    title: PropTypes.string,
    "album.title": PropTypes.string,
    "album.user.email": PropTypes.string,
    limit: PropTypes.number,
    offset: PropTypes.number,
  }),
  onApplyFilter: PropTypes.func,
};

export default Filters;
