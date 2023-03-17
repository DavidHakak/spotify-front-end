import styles from "./style.module.css";
import React from "react";
import SongDetails from "../SongDetails";

function SongContainer({ song, setPopup }) {
  return (
    <div className={styles.songContainer}>
      <button
        id={styles.playPauseButton}
        onClick={() => {
          setPopup(song.id);
        }}
      ></button>
      <img
        src={song.thumbnail.url}
        alt={song.thumbnail.title}
        className={styles.songImg}
      />

      <SongDetails
        name={song.title}
        artist={song.channel.name}
        time={song.duration_formatted}
        channelImg={song.channel.icon}
      />
    </div>
  );
}

export default SongContainer;
