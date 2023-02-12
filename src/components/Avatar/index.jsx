import styles from "./style.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

function Avatar() {
  const navigate = useNavigate();

  return (
    <div
      className={styles.avatar}
      onClick={() => {
        navigate("/userPlaylist");
      }}
    >
      <span className={styles.hello}>Hello</span>
      <span className={styles.avatarFullName}>
        {/* {JSON.parse(localStorage.userName)} */}
      </span>
    </div>
  );
}

export default Avatar;
