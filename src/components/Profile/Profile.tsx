import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "../Profile/Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";




function Profile(props:ProfilePropsType) {
    return (
        <div className={styles.myProfile}>
            <ProfileInfo profile={props.profile} profileStatus = {props.profileStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;