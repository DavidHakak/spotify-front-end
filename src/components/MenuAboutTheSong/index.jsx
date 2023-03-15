import styles from "./style.module.css";
import { useContext } from "react";
import { FiMoreVertical } from "react-icons/fi";
import MainContext from "../../context/MainContext";

function MenuAboutTheSong({
  showMenuToAddSong,
  handleOpenMenu,
  handleCloseAll,
  songInfo,
}) {
  const { playlistList } = useContext(MainContext);

  const handleSelect = (e) => {
    const selectedOption = e.target.selectedOptions[0];
    console.log(selectedOption.getAttribute("_id"));
    console.log(songInfo);
    handleCloseAll();
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
            {playlistList.map((playlist) => (
              <option
                key={playlist.playlistName}
                value={playlist.playlistName}
                _id={playlist._id}
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
