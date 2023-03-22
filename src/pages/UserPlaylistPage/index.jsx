import React, { useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";
import styles from "./style.module.css";

function UserPlaylistPage() {
  const { playlistList, setIsSearch } = useContext(MainContext);
  useEffect(() => {
    setIsSearch(false);
  }, []);

  return (
    <div className={styles.UserPlaylistPage}>
      <div className={styles.containerPlaylistList}>
        {playlistList.map((playlist) => {
          return (
            <div
              key={playlist.playlistName}
              className={styles.playlistCard}
              id={playlist._id}
            >
              {playlist.playlistName}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserPlaylistPage;
