import React from "react";
import styles from "./style.module.css";
import { BiImageAdd } from "react-icons/bi";
import { BiUserX } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { updateProfileImage } from "../../functions/apiRequest";
import { apiCalls } from "../../functions/apiRequest";
import { useContext, useRef } from "react";
import UserContext from "../../context/UserContext";

function SideBarUserControlMenu() {
  const { user, setPhotoData } = useContext(UserContext);

  let photoInputRef = useRef();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleDeleteUser = () => {
    apiCalls("delete", "/user/delete").then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  const handleOpenInputFile = () => {
    if (photoInputRef) {
      photoInputRef.click();
    }
  };

  const handleUpdateProfile = (e) => {
    const formData = new FormData();

    const selectedFile = e.target.files[0];

    formData.append("imageFile", selectedFile, selectedFile.name);

    updateProfileImage("/uploads/createAndUpdatePhoto", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      if (res.status === 200) {
        user.image = res.data;
        setPhotoData(res.data);
      }
    });
  };

  return (
    <div className={styles.SideBarUserControlMenuContainer}>
      <ul>
        <li>
          <span className={styles.titleLine}>Update Profile Image</span>
          <span className={styles.icon}>
            <input
              type="file"
              style={{ display: "none" }}
              accept=".png, .jpeg, .jpg"
              onInput={(e) => handleUpdateProfile(e)}
              ref={(input) => (photoInputRef = input)}
            />
            <BiImageAdd onClick={handleOpenInputFile} />
          </span>
        </li>
        <li>
          <span className={styles.titleLine}>Log Out</span>
          <span className={styles.icon}>
            <RiLogoutCircleRLine onClick={handleLogOut} />
          </span>
        </li>
        <li>
          <span className={styles.titleLine}>Delete User</span>
          <span className={styles.icon}>
            <BiUserX onClick={handleDeleteUser} />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default SideBarUserControlMenu;
