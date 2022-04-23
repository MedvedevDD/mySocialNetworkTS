import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={"/Profile/:userId"} element={<ProfileContainer/>}/>
                        <Route path={"/Dialogs/*"} element={<DialogsContainer/>}/>
                        <Route path={"/Users/*"} element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;