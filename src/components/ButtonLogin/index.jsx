import React from "react";
import styles from "./style.module.css";

function ButtonLogin({ children, type, width, func, disabled, ...otherProps }) {
  return (
    <button
      className={styles.buttonLogin}
      type={type}
      onClick={func}
      style={{ width: width }}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default ButtonLogin;
