import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";

function SideBar() {
  const PORT = "http://localhost:9999";
  const [visibleList, setVisibleList] = useState(true);
  const { playlistList, setPlaylistList } = useContext(MainContext);

  useEffect(() => {
    // getAllPlatlistNames(setPlaylistList);
  }, []);

  async function createNewPlaylist(e) {
    e.preventDefault();

    // createPlaylistInServer(e);

    // getAllPlatlistNames(setPlaylistList);

    setVisibleList(true);
  }

  return (
    <div className={styles.sideBar}>
      <button
        className={styles.createNewPlaylist}
        onClick={() => {
          setVisibleList(false);
        }}
      >
        create new playlist
      </button>
      {visibleList ? (
        <div className={styles.listPlaylist}>
          {playlistList.map((v) => {
            return (
              <div className={styles.playlist} id={v.id} key={v.id}>
                {v.playlistName}
              </div>
            );
          })}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            createNewPlaylist(e);
          }}
        >
          <div className={styles.formPlaylistName}>
            <input
              className={styles.inputPlaylistName}
              type="text"
              placeholder="Playlist name:"
            />
            <input className={styles.submitPlaylistName} type="submit" />
          </div>
        </form>
      )}
    </div>
  );
}

export default SideBar;
