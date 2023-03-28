import React from "react";
import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";
import InputLogin from "../../components/InputLogin";
import ButtonLogin from "../ButtonLogin";
import { apiCalls } from "../../functions/apiRequest";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function SideBarAddSongMenu({ visibleList, setVisibleList }) {
  const { playlistList, setPlaylistList } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    apiCalls("get", "/playlist/names").then((response) => {
      console.log(response.data);
      setPlaylistList(response.data);
    });
  }, []);

  async function removePlaylist(e, id) {
    e.stopPropagation();
    const data = { playlist_id: id };
    apiCalls("delete", "/playlist/deleteplaylist", data).then((response) => {
      if (response.status === 200) {
        setPlaylistList(response.data);
        navigate("/SearchSongs");
      }
    });
  }

  async function createNewPlaylist(e) {
    e.preventDefault();
    if (e.target[0].value.trim() !== "") {
      const data = {
        playlistName: e.target[0].value,
      };

      apiCalls("post", "/playlist/createplaylist", data).then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setPlaylistList(response.data);
        }
      });
    }
    setVisibleList(true);
  }

  const handlePlaylistCliched = (playlistId) => {
    navigate(`/showUserPlaylist/${playlistId}`);
  };

  return (
    <div
      className={styles.sideBar}
      onClick={() => {
        !visibleList && setVisibleList(true);
      }}
    >
      <div className={styles.createNewPlaylistContainer}>
        <button
          className={styles.createNewPlaylist}
          onClick={(e) => {
            e.stopPropagation();
            setVisibleList(false);
          }}
        >
          create new playlist
        </button>
      </div>
      {visibleList ? (
        <div className={styles.listPlaylist}>
          {playlistList &&
            playlistList.map((playlist) => {
              return (
                <div
                  className={styles.playlist}
                  id={playlist._id}
                  key={playlist._id}
                  onClick={() => handlePlaylistCliched(playlist._id)}
                >
                  {playlist.playlistName}
                  <TiDeleteOutline
                    className={styles.icon}
                    onClick={(e) => removePlaylist(e, playlist._id)}
                  />
                </div>
              );
            })}
        </div>
      ) : (
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={(e) => {
            createNewPlaylist(e);
          }}
        >
          <div className={styles.formPlaylistName}>
            <InputLogin placeholder="Enter playlist name" />
            <ButtonLogin type="submit" width={"100%"}>
              Create
            </ButtonLogin>
          </div>
        </form>
      )}
    </div>
  );
}

export default SideBarAddSongMenu;
