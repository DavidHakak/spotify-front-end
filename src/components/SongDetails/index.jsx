import React from "react";
import styles from "./style.module.css";

function SongDetails({ name, artist, time, channelImg }) {
  return (
    <div className={styles.songDetails}>
      <div className={styles.divSongDetails}>
        <h3 className={`${styles.songName} ${styles.fonts}`} dir="auto">
          {name}
        </h3>
        <div className={styles.divSongTimeAndArtist}>
          <div className={`${styles.songTime} ${styles.fonts}`}>{time}</div>
          <div
            className={`${styles.songArtistName} ${styles.fonts}`}
            dir="auto"
          >
            {artist}
          </div>
        </div>
      </div>
      <img className={styles.channelImg} src={channelImg} alt={artist} />
    </div>
  );
}

export default SongDetails;
