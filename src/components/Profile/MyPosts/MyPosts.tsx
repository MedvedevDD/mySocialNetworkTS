import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, newPostTextChangeAC} from "../../../redux/profile-reducer";
import {ActionTypes, PostType} from "../../../redux/redux-store";


type MyPostsPropsType = {
    posts: Array<PostType>
    message: string
    addPost: () => void
    onNewTextChange: (newText:string)=>void
}

function MyPosts({posts, ...rest}: MyPostsPropsType) {
    const postElements = posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)
    const addPost = () => {
        rest.addPost()
    }
    const onNewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        rest.onNewTextChange(newText)
    }
    const onEnterKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            rest.addPost()
        }
    }
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div><textarea onKeyPress={onEnterKeyPress} onChange={onNewTextChangeHandler} value={rest.message}
                               placeholder="введите ваше сообщение"></textarea></div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;