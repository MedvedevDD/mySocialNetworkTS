import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
let AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'myPost'} component={Textarea}
                       placeholder="введите ваше сообщение"
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
//@ts-ignore
AddNewPostForm = reduxForm({form: 'myPosts'})(AddNewPostForm)

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
                <AddNewPostForm onSubmit={addPost}/>
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

export default MyPosts;