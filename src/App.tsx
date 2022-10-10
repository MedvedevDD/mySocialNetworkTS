import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";


function App() {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={"/Profile/:userId"} element={<ProfileContainer/>}/>
                        <Route path={"/Dialogs/*"} element={<DialogsContainer/>}/>
                        <Route path={"/Users/*"} element={<UsersContainer/>}/>
                        <Route path={"/Login/*"} element={<Login/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;