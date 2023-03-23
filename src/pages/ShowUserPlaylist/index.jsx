import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../context/MainContext";
import apiCalls from "../../functions/apiRequest";
import styles from "./style.module.css";

import { TiDeleteOutline } from "react-icons/ti";
import { BsPlayCircle, BsClockHistory } from "react-icons/bs";
import { useParams } from "react-router-dom";
import PlaylistPlayer from "../../components/PlaylistPlayer";

function ShowUserPlaylist() {
  const { isSearch, setIsSearch } = useContext(MainContext);
  const { playlistId } = useParams();
  const [hoveredId, setHoveredId] = useState(null);
  const [songsList, setSongList] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);
  const [songIndex, setSongIndex] = useState(null);

  useEffect(() => {
    showPlayer && setShowPlayer(null);
    isSearch && setIsSearch(false);
    apiCalls("get", `/playlist/readplaylist?playlistId=${playlistId}`).then(
      (response) => {
        if (response.status === 200) {
          console.log("res", response.data);
          setSongList(response.data);
        }
      }
    );
  }, [playlistId]);

  const handleMouseOver = (index) => {
    setHoveredId(index);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const handleDeleteSong = (songId) => {
    const data = { songId, playlistId };
    apiCalls("put", "/playlist/deleteSongFromPlaylist", data).then(
      (response) => {
        if (response.status === 200) {
          setSongList(response.data);
        }
      }
    );
  };

  const handleShowPlayer = (mode, index = null) => {
    setShowPlayer(mode);
    setSongIndex(index);
  };

  return (
    <div className={styles.tablePage}>
      <div className={styles.playlistPlayer}>
        {showPlayer && (
          <PlaylistPlayer
            handleShowPlayer={handleShowPlayer}
            songsList={songsList}
            songIndex={songIndex}
            setSongIndex={setSongIndex}
          />
        )}
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.titles}>
              <th>{""} </th>
              <th>Song Name</th>
              <th>Channel Name</th>
              <th>
                <BsClockHistory className={styles.icon} />
              </th>
              <th>{""} </th>
            </tr>
          </thead>
          {songsList.map((song, index) => {
            return (
              <tbody className={styles.tbody}>
                <tr
                  key={song.id}
                  className={styles.songContainer}
                  id={song._id}
                  onMouseOver={() => handleMouseOver(song._id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <td className={styles.songNumAndIng}>
                    {hoveredId === song._id ? (
                      <BsPlayCircle
                        className={`display-on-hover ${styles.icon}`}
                        onClick={() => handleShowPlayer(true, index)}
                      />
                    ) : (
                      index + 1
                    )}
                    <img
                      className={styles.songImg}
                      src={song.imgUrl}
                      alt={song.songName}
                    />
                  </td>
                  <td className={styles.songName}>{song.songName}</td>
                  <td className={styles.channelName}>{song.channelName}</td>
                  <td className={styles.songTime}>{song.time}</td>
                  <td className={styles.icon}>
                    {hoveredId === song._id && (
                      <TiDeleteOutline
                        className="display-on-hover"
                        onClick={() => handleDeleteSong(song._id)}
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ShowUserPlaylist;
