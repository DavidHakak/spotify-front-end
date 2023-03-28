import React from "react";
import styles from "./style.module.css";
import { useContext } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import SideBarAddSongMenu from "../SideBarAddSongMenu";
import SideBarUserControlMenu from "../SideBarUserControlMenu";

function SideBar() {
  const { sideBarUserMenu } = useContext(MainContext);
  const [visibleList, setVisibleList] = useState(true);
  return (
    <div
      className={styles.sideBar}
      onClick={() => {
        !visibleList && setVisibleList(true);
      }}
    >
      {sideBarUserMenu ? (
        <SideBarUserControlMenu />
      ) : (
        <SideBarAddSongMenu
          visibleList={visibleList}
          setVisibleList={setVisibleList}
        />
      )}
    </div>
  );
}

export default SideBar;
