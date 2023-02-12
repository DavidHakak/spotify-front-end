import styles from "./style.module.css";
import React from "react";
import Logo from "../Logo";
import Search from "../Search";
import Avatar from "../Avatar";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

function Header() {
  const { isSearch } = useContext(MainContext);
  return (
    <div className={styles.header}>
      <Logo />
      {isSearch ? <Search /> : null}
      <Avatar />
    </div>
  );
}

export default Header;
