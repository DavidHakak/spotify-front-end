import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import SongDetails from "../SongDetails";
import { GrCirclePlay } from "react-icons/gr";
import MenuAboutTheSong from "../MenuAboutTheSong";

function SongContainer({ song, setPopup }) {
  const [onPlay, setOnPlay] = useState(true);
  const [showMenuToAddSong, setShowMenuToAddSong] = useState({
    menu: false,
    playlists: false,
  });

  const handleOpenMenu = (key) => {
    setShowMenuToAddSong({ ...showMenuToAddSong, [key]: true });
  };
  const handleCloseAll = () => {
    setShowMenuToAddSong({
      ...showMenuToAddSong,
      menu: false,
      playlists: false,
    });
  };

  return (
    <div className={styles.songContainer} onMouseLeave={handleCloseAll}>
      <div className={styles.containerIcons}>
        <GrCirclePlay
          id={styles.playButton}
          onClick={() => {
            setPopup(song.id);
            setOnPlay(false);
          }}
        />
        <MenuAboutTheSong
          showMenuToAddSong={showMenuToAddSong}
          handleOpenMenu={handleOpenMenu}
          handleCloseAll={handleCloseAll}
          songInfo={{
            youtubeId: song.id,
            imgUrl: song.thumbnail.url,
            songName: song.title,
            channelName: song.channel.name,
            time: song.duration_formatted,
          }}
        />
      </div>
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
