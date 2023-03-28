import styles from "./style.module.css";
import React, { useEffect } from "react";
import Search from "../Search";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Header() {
  const navigate = useNavigate();

  const { isSearch, setSideBarUserMenu } = useContext(MainContext);
  const { user, photoData, setPhotoData } = useContext(UserContext);

  useEffect(() => {
    console.log(photoData);
    if (!photoData) {
      const image = Object.values(user)[1];
      setPhotoData(image);
    }
  }, []);

  return (
    <div className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => {
          if (!window.location.href.includes("SearchSongs")) {
            navigate("/SearchSongs");
          }
        }}
      >
        <img src="/image/logo.png" alt="logo" />
      </div>
      {isSearch ? <Search /> : null}
      <div
        className={styles.avatar}
        onClick={() => {
          setSideBarUserMenu((state) => !state);
        }}
      >
        {photoData ? (
          <img
            src={`data:image/jpeg;base64,${photoData}`}
            alt="Profile Image"
          />
        ) : (
          "Hello"
        )}
      </div>
    </div>
  );
}

export default Header;
