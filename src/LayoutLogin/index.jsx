import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginAndRegisterPage from "../pages/LoginAndRegisterPage";
import ForgotPassPage from "../pages/ForgotPassPage";
import RenewPassPage from "../pages/RenewPassPage";
import PropTypes from "prop-types";

function LayoutLogin({ setUser }) {
  LayoutLogin.propTypes = {
    setUser: PropTypes.string.isRequired,
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginAndRegisterPage setUser={setUser} />} />
        <Route
          path="/login"
          element={<LoginAndRegisterPage setUser={setUser} />}
        />
        <Route path="/register" element={<LoginAndRegisterPage />} />
        <Route path="/forgot" element={<ForgotPassPage />} />
        <Route path="/renew" element={<RenewPassPage setUser={setUser} />} />
        <Route path="/*" element={<LoginAndRegisterPage setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default LayoutLogin;
