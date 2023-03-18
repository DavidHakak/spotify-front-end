import styles from "./style.module.css";
import { useContext } from "react";
import { FiMoreVertical } from "react-icons/fi";
import MainContext from "../../context/MainContext";
import apiCalls from "../../functions/apiRequest";

function MenuAboutTheSong({
  showMenuToAddSong,
  handleOpenMenu,
  handleCloseAll,
  songInfo,
}) {
  const { playlistList } = useContext(MainContext);

  const handleSelect = (e) => {
    handleCloseAll();
    const selectedOption = e.target.selectedOptions[0].getAttribute("id");
    console.log(selectedOption);
    const data = { songInfo: { ...songInfo }, playlist_id: selectedOption };
    console.log("data ", data);
    apiCalls("put", "/playlist/createSongInPlaylist", data);
  };

  return (
    <div className={styles.MenuAboutTheSongContainer}>
      {!showMenuToAddSong.menu && (
        <div className={styles.MenuAboutTheSong}>
          <FiMoreVertical onClick={() => handleOpenMenu("menu")} />
        </div>
      )}
      {showMenuToAddSong.menu && (
        <div className={styles.selectContainer}>
          <select
            name="playlistList"
            id="playlistList"
            onChange={(e) => handleSelect(e)}
          >
            <option>Choose Playlist</option>
            {playlistList.map((playlist) => (
              <option
                key={playlist.playlistName}
                value={playlist.playlistName}
                id={playlist._id}
              >
                {playlist.playlistName}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default MenuAboutTheSong;
