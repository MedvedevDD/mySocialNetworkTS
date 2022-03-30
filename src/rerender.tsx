import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost, newPostTextChange,  StateType} from "./redux/state";




export const rerenderEntireTree = (state : StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} newPostTextChange={newPostTextChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}