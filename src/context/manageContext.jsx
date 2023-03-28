import React from "react";
import { useState } from "react";
import MainContext from "./MainContext";
import UserContext from "./UserContext";

export const ContextProvider = ({ user, setUser, children }) => {
  const [popup, setPopup] = useState(false);
  const [isSearch, setIsSearch] = useState(true);
  const [playlistList, setPlaylistList] = useState([]);
  const [onSearch, setOnSearch] = useState("נתן גושן");
  const [songList, setSongList] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [userFullName, setUserFullName] = useState("");
  const [newPlaylist, setNewPlaylist] = useState(true);
  const [sideBarUserMenu, setSideBarUserMenu] = useState(false);
  const [photoData, setPhotoData] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, photoData, setPhotoData }}>
      <MainContext.Provider
        value={{
          popup,
          setPopup,
          isSearch,
          setIsSearch,
          playlistList,
          setPlaylistList,
          onSearch,
          setOnSearch,
          songList,
          setSongList,
          userDetails,
          setUserDetails,
          userFullName,
          setUserFullName,
          newPlaylist,
          setNewPlaylist,
          sideBarUserMenu,
          setSideBarUserMenu,
        }}
      >
        {children}
      </MainContext.Provider>
    </UserContext.Provider>
  );
};
