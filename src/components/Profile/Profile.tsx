import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action:ActionTypes)=>void
}

function Profile({profilePage, ...rest}: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}
                     message={profilePage.newPostText}
                     dispatch={rest.dispatch}
            />
        </div>
    )
}

export default Profile;