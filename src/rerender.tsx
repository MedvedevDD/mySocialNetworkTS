import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./redux/state";


export const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 newPostTextChange={store.newPostTextChange.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}