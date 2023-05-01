import React from "react";
import {addPostAC, newPostTextChangeAC} from "../../../redux/profile-reducer";
import {ProfilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect, useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../../redux/redux-store";


type MyPostsContainerPropsType = {
    profilePage: ProfilePageType
}

/*function MyPostsContainer(props: MyPostsContainerPropsType) {
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
}*/
type MapStateToPropsType = {
    profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    addPost: (post:string) => void
    onNewTextChange: (newText: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppRootStateType):MapStateToPropsType => {
    return {
       profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addPost: (post:string) => {
            dispatch(addPostAC(post))
        },
        onNewTextChange: (newText:string) => {
            dispatch(newPostTextChangeAC(newText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;