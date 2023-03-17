import styles from "./style.module.css";

function ButtonLogin({ children, type, width, func, style, ...otherProps }) {
  return (
    <div style={style}>
      <button
        className={styles.buttonLogin}
        type={type}
        onClick={func}
        style={{ width: width }}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonLogin;
