import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActionTypes, StateType} from "./redux/redux-store";


type AppPropsType = {
    state: StateType
    dispatch: (action:ActionTypes)=>void
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
                                                       dispatch={rest.dispatch}/>}/>
            <Route path={"/Dialogs"} element={<Dialogs dialogsPage={state.dialogsPage}
                                                       dispatch={rest.dispatch}/>}/>
                </Routes>
            </div>
        </div>

        </BrowserRouter>
    );
}

export default App;