import React from "react";
import styles from "./style.module.css";

function InputLogin({
  type,
  placeholder,
  pattern,
  onInvalid,
  required,
  inputRef,
  style,
  ref,
  onChange,
  ...otherProps
}) {
  return (
    <input
      dir="auto"
      className={styles.inputLogin}
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      ref={ref || inputRef}
      style={style}
      onChange={onChange}
      {...otherProps}
    />
  );
}

export default InputLogin;
