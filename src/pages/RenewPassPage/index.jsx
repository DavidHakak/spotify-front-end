import InputLogin from "../../components/InputLogin";
import styles from "./style.module.css";
import { apiCalls, setToken } from "../../functions/apiRequest";
import ButtonLogin from "../../components/ButtonLogin";
import { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ChangeAndCreatePassPass({ setUser }) {
  const userFirstPassword = useRef();
  const userSecondPassword = useRef();
  let [searchParams, setSearchParams] = useSearchParams();
  const passToken = searchParams.get("token");
  const nav = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const handleInputsChange = () => {
    if (
      userFirstPassword?.current.value.length > 0 &&
      userSecondPassword?.current.value.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (userFirstPassword.current.value === userSecondPassword.current.value) {
      const data = {
        firstPassword: userFirstPassword.current.value,
        secondPassword: userSecondPassword.current.value,
        token: passToken,
      };

      apiCalls("post", "/user/changepassword", data).then((res) => {
        if (res.status === 200) {
          localStorage.token = res.data.userToken;
          setToken(res.data.userToken);
          setUser(res.data.userExist);
          nav("/SearchSongs");
        }
      });
    }
  }

  return (
    <div className={styles.formLoginContainer}>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>Create New Password</p>
        <p className={styles.paragraph}>please choose a new password</p>
        <InputLogin
          type="password"
          name="input"
          placeholder="new password"
          required={true}
          inputRef={userFirstPassword}
          onChange={handleInputsChange}
        />
        <InputLogin
          type="password"
          name="input"
          placeholder="confirm new password"
          required={true}
          inputRef={userSecondPassword}
          onChange={handleInputsChange}
        />

        <ButtonLogin type={"submit"} width={"328px"} disabled={disabled}>
          Send
        </ButtonLogin>
      </form>
    </div>
  );
}
