import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./redux/state";


export const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}