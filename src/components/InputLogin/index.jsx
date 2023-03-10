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
  ...otherProps
}) {
  return (
    <input
      className={styles.inputLogin}
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      ref={ref || inputRef}
      style={style}
      {...otherProps}
    />
  );
}

export default InputLogin;
