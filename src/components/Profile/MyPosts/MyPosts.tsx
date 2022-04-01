import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    message: string
    addPost: () => void
    onTextChangeHandler: (text: string) => void
}

function MyPosts({posts, ...rest}: MyPostsPropsType) {
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    const postElements = posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)
    const addPost = () => {
        // // let text = newPostElement.current?.value
        // //     if (text) {
        // //         rest.addPost(text)
        // //     }
        // if (newPostElement.current) {
        rest.addPost()
        // newPostElement.current.value = ""
        // }
    }
    const onNewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        rest.onTextChangeHandler(newText)

    }
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div><textarea onChange={onNewTextChangeHandler} value={rest.message}
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