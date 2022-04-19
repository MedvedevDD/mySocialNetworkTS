import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "../Profile/Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




function Profile() {
    return (
        <div className={styles.myProfile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;