import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import styles from "./style.module.css";

function UserPlaylistPage() {
  const { playlistList, setIsSearch } = useContext(MainContext);

  setIsSearch(false);

  return (
    <div className={styles.UserPlaylistPage}>
      <div>
        <div className={styles.containerPlaylistList}>
          {playlistList.map((playlist) => {
            return (
              <div key={playlist.playlistName} className="playlistCard">
                {playlist.playlistName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserPlaylistPage;
