import styles from "./style.module.css";
import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import { FaSearch } from "react-icons/fa";

function Search() {
  const { setOnSearch } = useContext(MainContext);

  const changeSearchState = (e) => {
    if (e.target.value !== "") setOnSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        onKeyDown={(e) => changeSearchState(e)}
        name="search"
        type="search"
        placeholder="Search..."
        className={styles.inputSearch}
      />
      <FaSearch onClick={(e) => changeSearchState(e)} />
    </div>
  );
}

export default Search;
