import styles from "./style.module.css";
import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import SongContainer from "../SongContainer";

function MainContainerSongs() {
  const { songList, setPopup, setIsSearch } = useContext(MainContext);
  setIsSearch(true);
  return (
    <div className={styles.mainContainerSongs}>
      {songList ? (
        songList.map((song) => (
          <SongContainer key={song.title} song={song} setPopup={setPopup} />
        ))
      ) : (
        <>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
          <span className={styles.loader}></span>
        </>
      )}
    </div>
  );
}

export default MainContainerSongs;
