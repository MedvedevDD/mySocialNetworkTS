import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (text:string)=> void
}

function Profile({profilePage, ...rest}:ProfilePropsType) {
 return (
     <div >
         <ProfileInfo/>
         <MyPosts posts={profilePage.posts} addPost={rest.addPost}/>
     </div>
 )
}
export default Profile;