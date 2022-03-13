import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
}

function Profile({profilePage}:ProfilePropsType) {
 return (
     <div >
         <ProfileInfo/>
         <MyPosts posts={profilePage.posts}/>
     </div>
 )
}
export default Profile;