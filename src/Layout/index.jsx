import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Popup from "../components/Popup";
import MainContainerSearchSongs from "../components/MainContainerSearchSongs";
import UserPlaylistPage from "../pages/UserPlaylistPage";
import MainContext from "../context/MainContext";
import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";

function Layout() {
  const { popup, onSearch, setSongList } = useContext(MainContext);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f6421eca43msh366f53afe64f3bep105434jsn3b8ea0e30fbc",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

    fetch(
      `https://simple-youtube-search.p.rapidapi.com/search?query=${onSearch}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSongList(response.results);
      })
      .catch((err) => console.error(err));
  }, [onSearch, setSongList]);

  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path="/" element={<MainContainerSearchSongs />} />
        <Route path="/SearchSongs" element={<MainContainerSearchSongs />} />
        <Route path="/userPlaylist" element={<UserPlaylistPage />} />
      </Routes>
      <SideBar />
      {popup && <Popup />}
    </div>
  );
}

export default Layout;
