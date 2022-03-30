import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {newPostTextChange, StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
    addPost: ()=>void
    addMessage: (message:string)=>void
    newPostTextChange: (newText:string)=>void
}

function App({state, ...rest} : AppPropsType) {
    return (
        <BrowserRouter>

        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={state.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
            <Route path={"/Profile"} element={<Profile profilePage={state.profilePage}
                                                       addPost={rest.addPost}
                                                       onTextChangeHandler={rest.newPostTextChange}/>}/>
            <Route path={"/Dialogs"} element={<Dialogs dialogsPage={state.dialogsPage} addMessage={rest.addMessage}/>}/>
                </Routes>
            </div>
        </div>

        </BrowserRouter>
    );
}

export default App;