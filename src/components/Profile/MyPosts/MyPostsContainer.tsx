import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, newPostTextChangeAC} from "../../../redux/profile-reducer";
import {ActionTypes, AppRootStateType, PostType, ProfilePageType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {useDispatch} from "react-redux";


type MyPostsContainerPropsType = {
    profilePage: ProfilePageType
}

function MyPostsContainer(props: MyPostsContainerPropsType) {
    const profilePage = props.profilePage
    const dispatch = useDispatch()
    //const postElements = posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)
    const addPost = () => {
        dispatch(addPostAC())
    }
    const onNewTextChangeHandler = (newText:string) => {
        dispatch(newPostTextChangeAC(newText))
    }
return <MyPosts posts={profilePage.posts}
                message={profilePage.newPostText}
                addPost={addPost}
                onNewTextChange={onNewTextChangeHandler}/>
}

export default MyPostsContainer;