import styles from "./style.module.css";
import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import MainContext from "../../context/MainContext";
import Popup from "../../components/Popup";
import UserPlaylistPage from "../UserPlaylistPage/UserPlaylistPage";

function MyApp() {
  const { onSearch, setSongList, popup } = useContext(MainContext);

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
        {/* <Route path="SearchSongs" element={<MainContainerSearchSongs />} /> */}
        <Route path="UserPlaylist" element={<UserPlaylistPage />} />
      </Routes>
      <SideBar />
      {popup && <Popup />}
    </div>
  );
}

export default MyApp;
