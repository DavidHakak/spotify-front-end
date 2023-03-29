import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import YouTube, { YouTubeProps } from "react-youtube";
import { BiPlay } from "react-icons/bi";
import { IoPlayForwardSharp } from "react-icons/io5";
import { IoPlayBackSharp } from "react-icons/io5";
import { CgChevronUpO } from "react-icons/cg";
import { CgChevronDownO } from "react-icons/cg";
import { MdOutlineReplay } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosPause } from "react-icons/io";

function PlaylistPlayer({
  handleShowPlayer,
  songsList,
  songIndex,
  setSongIndex,
}) {
  const [showMovie, setShowMovie] = useState(false);
  const [replay, setReplay] = useState(false);
  const [songToPlay, setSongToPlay] = useState(null);
  const [play, setPlay] = useState(true);

  const handleReplay = () => {
    setReplay(!replay);
  };

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleShowMovie = () => {
    setShowMovie(!showMovie);
  };

  const handleNextSong = () => {
    if (songIndex >= 0 && songIndex < songsList.length - 1) {
      setSongIndex(songIndex + 1);
    } else if (replay && songIndex === songsList.length - 1) {
      setSongIndex(0);
    }
  };

  const handleReturnSong = () => {
    if (songIndex > 0 && songIndex <= songsList.length - 1) {
      setSongIndex((songIndex) => songIndex - 1);
    }
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (songIndex >= 0 && songIndex <= songsList.length - 1) {
      setSongToPlay(songsList[songIndex].youtubeId);
    }
  }, [songIndex]);

  return (
    <div className={styles.playlistPlayer}>
      <div
        className={`${styles.innerPlayer} ${
          !showMovie && styles.innerPlayerHidden
        }`}
      >
        <YouTube
          key={songToPlay}
          opts={opts}
          videoId={songToPlay}
          onEnd={handleNextSong}
          iframeClassName={styles.iframe}
          className={styles.iframe}
        />
      </div>

      <div className={styles.menagePlayerContainer}>
        <div>
          <IoCloseSharp
            className={`${styles.close} ${styles.icon}`}
            onClick={() => handleShowPlayer(false)}
          />
        </div>
        <div className={styles.menagePlayer}>
          <div className={styles.icon}>
            {!showMovie ? (
              <CgChevronDownO onClick={handleShowMovie} />
            ) : (
              <CgChevronUpO onClick={handleShowMovie} />
            )}
          </div>
          <div className={styles.icon}>
            <IoPlayBackSharp onClick={handleReturnSong} />
          </div>
          <div className={styles.icon}>
            {play ? (
              <BiPlay onClick={handlePlay} />
            ) : (
              <IoIosPause onClick={handlePlay} />
            )}
          </div>
          <div className={styles.icon}>
            <IoPlayForwardSharp onClick={handleNextSong} />
          </div>
          <div className={styles.icon}>
            <MdOutlineReplay
              className={replay ? "" : styles.replay}
              onClick={handleReplay}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistPlayer;
