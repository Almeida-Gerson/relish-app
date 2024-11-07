import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import "../styles/filters.css";
import { defaultFilters } from "../constants";
import Pagination from "./Pagination";

const Filters = ({
  filters = defaultFilters,
  total = 0,
  current = 0,
  onPageChange,
  onApplyFilter,
}: {
  filters?: {
    title: string;
    "album.title": string;
    "album.user.email": string;
    limit: number;
    offset: number;
  };
  total?: number;
  current?: number;
  onPageChange: (page: number) => void;
  onApplyFilter: (newFiltersState: any) => void;
}) => {
  const [newFiltersState, setNewFiltersState] = useState({
    ...defaultFilters,
    ...filters,
  });

  const handleChange = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setNewFiltersState((prevState) => ({
        ...prevState,
        [key]: e.target.value,
      }));
    },
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    onApplyFilter(newFiltersState);
  };

  return (
    <div className="relish-app-filters">
      <form
        className="relish-app-filters__container relish-app-filters__section"
        onSubmit={handleSubmit}
      >
        <div className="relish-app-filters__input-container relish-app-filters__item">
          <label htmlFor="photo_title">Photo Title</label>
          <input
            id="photo_title"
            name="photo_title"
            className="relish-app-filters__input"
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
            className="relish-app-filters__input"
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
            className="relish-app-filters__input"
            type="text"
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
      <div className="relish-app-filters__section">
        <Pagination
          total={total}
          current={current}
          pageSize={filters?.limit}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Filters;
