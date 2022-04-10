import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

function MyPosts({profilePage, ...rest}: MyPostsPropsType) {
    const postElements = profilePage.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)
    const addPost = () => {
        let newText = profilePage.newPostText.trim();
        if (newText !== "") {
            rest.addPost()
        }
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
                <div><textarea onKeyPress={onEnterKeyPress} onChange={onNewTextChangeHandler}
                               value={profilePage.newPostText}
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