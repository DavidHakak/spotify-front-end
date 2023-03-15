import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../context/MainContext";
import styles from "./style.module.css";

import { TiDeleteOutline } from "react-icons/ti";
import { BsPlayCircle } from "react-icons/bs";

function ShowUserPlaylist() {
  const { songList, setIsSearch } = useContext(MainContext);
  setIsSearch(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    console.log(songList);
  }, []);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tr className={styles.titles}>
          {/* <thead className={styles.thead}> */}
          <th>{""} </th>
          <th>Song Name</th>
          <th>Artist Name</th>
          <th>Time</th>
          <th>{""} </th>
          {/* </thead> */}
        </tr>
        {songList.map((song, index) => {
          return (
            <tr
              key={song.title}
              className={styles.songContainer}
              id={song.id}
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* <tbody className={styles.tbody}> */}
              <td className={styles.songNumAndIng}>
                {hoveredIndex === index ? (
                  <BsPlayCircle className={styles.iconPlay} />
                ) : (
                  index + 1
                )}
                <img
                  className={styles.songImg}
                  src={song.thumbnail.url}
                  alt={song.channel.name}
                />
              </td>
              <td className={styles.songName}>{song.title}</td>
              <td className={styles.artistName}>{song.channel.name}</td>
              <td className={styles.songTime}>{song.duration_formatted}</td>
              <td className={styles.deleteIcon}>
                {hoveredIndex === index ? <TiDeleteOutline /> : ""}
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
