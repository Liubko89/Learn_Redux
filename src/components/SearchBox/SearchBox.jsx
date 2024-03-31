import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearch = (ev) => {
    dispatch(selectNameFilter(ev.target.value));
  };
  return (
    <label className={css.SearchBox}>
      <span>
        <b> Find contacts by name</b>
      </span>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Search for..."
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchBox;
