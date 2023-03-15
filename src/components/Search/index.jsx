import styles from "./style.module.css";
import React, { useContext, useRef } from "react";
import MainContext from "../../context/MainContext";
import { FaSearch } from "react-icons/fa";

function Search() {
  const { setOnSearch } = useContext(MainContext);
  const inputSearch = useRef(null);

  const changeSearchState = (e) => {
    if (e.target.value !== "") setOnSearch(inputSearch.current.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        dir="auto"
        onKeyDown={(e) => {
          if (e.key === "Enter") changeSearchState(e);
        }}
        type="search"
        placeholder="Search..."
        className={styles.inputSearch}
        ref={inputSearch}
      />
      <FaSearch className={styles.searchIcon} onClick={changeSearchState} />
    </div>
  );
}

export default Search;
