import styles from "./style.module.css";
import InputLogin from "../InputLogin";
import ButtonLogin from "../ButtonLogin";
function Login({
  handleSubmitLogin,
  userPasswordLoginInput,
  userEmailLoginInput,
}) {
  return (
    <form
      className={styles.formLogin}
      onSubmit={(e) => {
        handleSubmitLogin(e);
      }}
    >
      <h1 className={styles.titleLogin}>Sign in</h1>
      {/* <div className={styles.socialContainer}>
        <a href="#" className="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div> */}
      <span className={styles.titleLoginSpan}>or use your account</span>
      <InputLogin
        type={"email"}
        required={"required"}
        inputRef={userEmailLoginInput}
        placeholder={"Email"}
      />
      <InputLogin
        type={"password"}
        required={"required"}
        //minLength="4"
        inputRef={userPasswordLoginInput}
        placeholder={"Password"}
      />
      <a href="/">Forgot your password?</a>
      <ButtonLogin>Sign In</ButtonLogin>
    </form>
  );
}

export default Login;
