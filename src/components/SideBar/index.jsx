import styles from "./style.module.css";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import InputLogin from "../../components/InputLogin";
import ButtonLogin from "../ButtonLogin";
import apiCalls from "../../functions/apiRequest";
import UserContext from "../../context/UserContext";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const { user } = useContext(UserContext);
  const { playlistList, setPlaylistList } = useContext(MainContext);
  const [visibleList, setVisibleList] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    apiCalls("get", "/playlist/names").then((response) => {
      console.log(response.data);
      setPlaylistList(response.data);
    });
  }, []);

  async function removePlaylist(e) {
    e.stopPropagation();
    const data = { playlist_Id: e.target.id, userId: user._id };
    apiCalls("delete", "/playlist/deleteplaylist", data).then((response) => {
      if (response.status === 200) {
        setPlaylistList(response.data);
      }
    });
  }

  async function createNewPlaylist(e) {
    e.preventDefault();
    if (e.target[0].value.trim() !== "") {
      const data = {
        userId: user._id,
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
          {playlistList.map((playlist) => {
            return (
              <div
                className={styles.playlist}
                id={playlist._id}
                key={playlist._id}
                onClick={() => handlePlaylistCliched(playlist._id)}
              >
                {playlist.playlistName}
                <TiDeleteOutline
                  id={playlist._id}
                  className={styles.icon}
                  onClick={(e) => removePlaylist(e)}
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
              Submit
            </ButtonLogin>
          </div>
        </form>
      )}
    </div>
  );
}

export default SideBar;
