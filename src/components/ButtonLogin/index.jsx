import React from "react";
import styles from "./style.module.css";

function ButtonLogin({ children, type, width, func, style, ...otherProps }) {
  return (
    <button
      className={styles.buttonLogin}
      type={type}
      onClick={func}
      style={{ width: width }}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default ButtonLogin;
