import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";

function MyPosts({profilePage, ...rest}: MyPostsPropsType) {
    const postElements = profilePage.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)
    // const addPost = () => {
    //     let newText = profilePage.newPostText.trim();
    //     if (newText !== "") {
    //         rest.addPost()
    //     }
    // }
    const addPost = (formData: any) => {
            rest.addPost(formData.myPost)
        }

    // const onNewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newText = e.currentTarget.value
    //     rest.onNewTextChange(newText)
    // }
    // const onEnterKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === "Enter") {
    //         rest.addPost()
    //     }
    // }
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <MyPostsReduxForm onSubmit={addPost}/>
                {/*<div><textarea onKeyPress={onEnterKeyPress} onChange={onNewTextChangeHandler}*/}
                {/*               value={profilePage.newPostText}*/}
                {/*               placeholder="введите ваше сообщение"></textarea></div>*/}
                {/*<div>*/}
                {/*    <button onClick={addPost}>Add Post</button>*/}
                {/*</div>*/}
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
const MyPostsForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'myPost'} component={'textarea'} placeholder="введите ваше сообщение"></Field>
            </div>
            <div>
                <button >Add Post</button>
            </div>
        </form>
    )
}
const MyPostsReduxForm = reduxForm({form: 'myPosts'})(MyPostsForm)
export default MyPosts;