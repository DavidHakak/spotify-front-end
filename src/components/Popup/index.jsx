import styles from "./style.module.css";
import React, { useContext } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import MainContext from "../../context/MainContext";

function Popup() {
  const { popup, setPopup } = useContext(MainContext);

  const onPlay: YouTubeProps["onPlay"] = (event) => {
    event.target.getCurrentTime();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.popup} onClick={() => setPopup(false)}>
      <div className={styles.innerPopup} onClick={(e) => e.stopPropagation()}>
        <YouTube
          key={popup}
          opts={opts}
          videoId={popup}
          onPlay={onPlay}
          iframeClassName={styles.iframe}
          className={styles.iframe}
        />
      </div>
    </div>
  );
}

export default Popup;
