import React from "react";
import styles from "./style.module.css";
import { useRef, useState } from "react";
import InputLogin from "../../components/InputLogin";
import { apiCalls } from "../../functions/apiRequest";
import ButtonLogin from "../../components/ButtonLogin";

export default function ForgotPassPage() {
  const [send, setSend] = useState(false);
  const userEmailInput = useRef();
  const [disabled, setDisabled] = useState(true);

  const handleChange = () => {
    if (
      userEmailInput.current.value &&
      userEmailInput.current.value.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setSend(true);
    apiCalls("get", `/user/forgot/?email=${userEmailInput.current.value}`);
  }

  return (
    <div className={styles.formLoginContainer}>
      {!send ? (
        <form className={styles.formLogin} onSubmit={handleSubmit}>
          <p className={styles.paragraphTitle}>Forgot Password?</p>
          <p className={styles.paragraph}>
            Just tell us the email address you would like to register with us
          </p>
          <InputLogin
            type="email"
            name="input"
            placeholder="email"
            required={true}
            inputRef={userEmailInput}
            onChange={handleChange}
          />
          <ButtonLogin width={"328px"} type="submit" disabled={disabled}>
            Send
          </ButtonLogin>
        </form>
      ) : (
        <div className={styles.emailSendContainer}>
          <p className={styles.msgAfterSend}>
            A password recovery link has been sent to your email
          </p>
        </div>
      )}
    </div>
  );
}
