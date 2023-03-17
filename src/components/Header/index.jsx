import styles from "./style.module.css";
import React from "react";
import Search from "../Search";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { isSearch } = useContext(MainContext);
  return (
    <div className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => {
          navigate("/SearchSongs");
        }}
      >
        <img src="/image/logo.png" alt="logo" />
      </div>
      {isSearch ? <Search /> : null}
      <div
        className={styles.avatar}
        onClick={() => {
          navigate("/userPlaylist");
        }}
      >
        <span className={styles.hello}>Hello</span>
        <span className={styles.avatarFullName}></span>
      </div>
    </div>
  );
}

export default Header;
