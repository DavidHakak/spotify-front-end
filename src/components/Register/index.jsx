import React from "react";
import ButtonLogin from "../ButtonLogin";
import InputLogin from "../InputLogin";
import styles from "./style.module.css";

function Register({
  handleSubmitRegister,
  userEmailInput,
  userPasswordInput,
  userFirstNameInput,
  userLastNameInput,
  userPhoneNumberInput,
}) {
  return (
    <form
      className={styles.formLogin}
      onSubmit={(e) => {
        handleSubmitRegister(e);
      }}
    >
      <h1 className={styles.titleLogin}>Create Account</h1>
      {/* <div class={styles.socialContainer}>
        <a href="#" class="social">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social">
          <i class="fab fa-google-plus-g"></i>
        </a>
        <a href="#" class="social">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div> */}
      <span className={styles.titleLoginSpan}>
        or use your email for registration
      </span>
      <InputLogin
        type={"text"}
        required={"required"}
        pattern={"[a-zA-Z]*"}
        minLength="2"
        inputRef={userFirstNameInput}
        placeholder={"First name"}
      />
      <InputLogin
        type={"text"}
        required={"required"}
        pattern={"[a-zA-Z]*"}
        minLength="2"
        inputRef={userLastNameInput}
        placeholder={"Last name"}
      />
      <InputLogin
        type={"email"}
        required={"required"}
        inputRef={userEmailInput}
        placeholder={"Email"}
      />
      <InputLogin
        type={"password"}
        required={"required"}
        minLength="4"
        inputRef={userPasswordInput}
        placeholder={"Password"}
      />
      <InputLogin
        type={"text"}
        required={"required"}
        pattern={"[0-9]{3}[0-9]{3}[0-9]{4}"}
        minLength="10"
        inputRef={userPhoneNumberInput}
        placeholder={"Phone number"}
      />
      <ButtonLogin>Sign Up</ButtonLogin>
    </form>
  );
}

export default Register;
