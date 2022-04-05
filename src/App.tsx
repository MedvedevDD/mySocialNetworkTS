import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App() {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={"/Profile"} element={<Profile/>}/>
                        <Route path={"/Dialogs"} element={<DialogsContainer/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;