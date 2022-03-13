import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
}

function MyPosts({posts, ...rest}:MyPostsPropsType) {

    const postElements = posts.map(p=> <Post message={p.message} likeCounts={p.likeCounts}/>)
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div><textarea placeholder="введите ваше сообщение"></textarea></div>
                <div><button>Add Post</button></div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;