import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../context/MainContext";
import apiCalls from "../../functions/apiRequest";
import styles from "./style.module.css";

import { TiDeleteOutline } from "react-icons/ti";
import { BsPlayCircle, BsClockHistory } from "react-icons/bs";
import { useParams } from "react-router-dom";

function ShowUserPlaylist() {
  const { setIsSearch } = useContext(MainContext);
  setIsSearch(false);
  const { playlistId } = useParams();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    apiCalls("get", `/playlist/readplaylist?playlistid=${playlistId}`).then(
      (response) => {
        if (response.status === 200) {
          console.log("res", response.data);
          setSongList(response.data);
        }
      }
    );
  }, [playlistId]);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
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

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tr className={styles.titles}>
          {/* <thead className={styles.thead}> */}
          <th>{""} </th>
          <th>Song Name</th>
          <th>Channel Name</th>
          <th>
            <BsClockHistory className={styles.icon} />
          </th>
          <th>{""} </th>
          {/* </thead> */}
        </tr>
        {songList.map((song, index) => {
          console.log(song);
          return (
            <tr
              key={song.id}
              className={styles.songContainer}
              id={song.id}
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* <tbody className={styles.tbody}> */}
              <td className={styles.songNumAndIng}>
                {hoveredIndex === index ? (
                  <BsPlayCircle className={styles.icon} />
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
              <td className={styles.artistName}>{song.artist}</td>
              <td className={styles.songTime}>{song.time}</td>
              <td className={styles.icon}>
                {hoveredIndex === index ? (
                  <TiDeleteOutline onClick={() => handleDeleteSong(song.id)} />
                ) : (
                  ""
                )}
              </td>
              {/* </tbody> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ShowUserPlaylist;
