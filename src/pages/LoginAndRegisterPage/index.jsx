import "./style.css";
import React, { useState } from "react";
import { useRef } from "react";
import apiCalls, { setToken } from "../../functions/apiRequest";
import { useNavigate } from "react-router-dom";
import language from "../../functions/language";
import Register from "../../components/Register";
import Login from "../../components/Login";

// creator: david hakak
// color: _______________
// icon: ________________

function LoginAndRegisterPage({ setUser }) {
  const [panelActive, setPanelActive] = useState(false);
  const userEmailInput = useRef(null);
  const userPasswordInput = useRef(null);
  const userFirstNameInput = useRef(null);
  const userLastNameInput = useRef(null);
  const userPhoneNumberInput = useRef(null);
  const userEmailLoginInput = useRef(null);
  const userPasswordLoginInput = useRef(null);
  const nav = useNavigate();

  function handleSubmitLogin(e) {
    e.preventDefault();

    const data = {
      password: userPasswordLoginInput.current.value,
      email: userEmailLoginInput.current.value,
    };

    apiCalls("post", "http://localhost:9999/api/user/login", data).then(
      (res) => {
        if (res.status === 200) {
          setToken(res.data.token);
          setUser(true);
          localStorage.token = res.data.token;
          nav("/myapp");
        }
      }
    );
  }

  function handleSubmitRegister(e) {
    e.preventDefault();

    const data = {
      firstName: userFirstNameInput.current.value,
      lastName: userLastNameInput.current.value,
      password: userPasswordInput.current.value,
      email: userEmailInput.current.value,
      phoneNumber: userPhoneNumberInput.current.value,
    };

    apiCalls("post", "user/register", data).then((res) => {
      if (res.status === 200) {
        setToken(res.data.token);
        setUser(true);
        localStorage.token = res.data.token;
        nav("/myapp");
      }
    });
  }

  return (
    <div className="background">
      <div className="Login">
        <div
          className={`login-container ${
            panelActive ? "right-panel-active" : ""
          } `}
          id="login-container"
        >
          <div className="form-container sign-up-container">
            <Register
              handleSubmitRegister={handleSubmitRegister}
              userEmailInput={userEmailInput}
              userPasswordInput={userPasswordInput}
              userFirstNameInput={userFirstNameInput}
              userLastNameInput={userLastNameInput}
              userPhoneNumberInput={userPhoneNumberInput}
            />
          </div>
          <div className="form-container sign-in-container">
            <Login
              handleSubmitLogin={handleSubmitLogin}
              userEmailLoginInput={userEmailLoginInput}
              userPasswordLoginInput={userPasswordLoginInput}
            />
          </div>
          <div className="overlay-container-login">
            <div className="overlay-login">
              <div className="overlay-panel overlay-left">
                <h1 className="title-login">Welcome Back!</h1>
                <p className="p-login">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost button-login"
                  id="signIn"
                  onClick={() => {
                    setPanelActive(false);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="title-login">Hello, Friend!</h1>
                <p className="p-login">
                  Enter your personal details and start play with us
                </p>
                <button
                  className="ghost button-login"
                  id="signUp"
                  onClick={() => {
                    setPanelActive(true);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAndRegisterPage;
