import styles from "./style.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className={styles.logo}
      onClick={() => {
        navigate("/SearchSongs");
      }}
    >
      <img src="/image/logo.png" alt="logo" />
    </div>
  );
}

export default Logo;
