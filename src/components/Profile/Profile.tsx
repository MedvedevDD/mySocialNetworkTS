import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profilePage: ProfilePageType
}

function Profile({profilePage, ...rest}: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePage={profilePage}
            />
        </div>
    )
}

export default Profile;