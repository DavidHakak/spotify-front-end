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
function SideBar() {
  const { user } = useContext(UserContext);
  const { playlistList, setPlaylistList } = useContext(MainContext);
  const [visibleList, setVisibleList] = useState(true);

  async function removePlaylist(e) {
    const data = { playlist_Id: e.target.id, userId: user._id };
    console.log(e.target.id);

    apiCalls("post", "/playlist/deleteplaylist", data).then((response) => {
      if (response.status === 200) {
        setPlaylistList(response.data);
      }
    });
  }
  useEffect(() => {
    apiCalls("get", "/playlist/names").then((response) => {
      setPlaylistList(response.data);
    });
  }, []);

  async function createNewPlaylist(e) {
    e.preventDefault();
    if (e.target[0].value.trim() !== "") {
      const data = {
        userId: user._id,
        playlistName: e.target[0].value,
      };

      apiCalls("post", "/playlist/createplaylist", data).then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setPlaylistList(response.data);
        }
      });
    }
    setVisibleList(true);
  }

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
          {playlistList.map((v) => {
            return (
              <div className={styles.playlist} id={v._id} key={v._id}>
                {v.playlistName}
                <TiDeleteOutline
                  id={v._id}
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
