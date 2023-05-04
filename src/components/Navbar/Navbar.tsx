import React from "react";
import s from './Navbar.module.css';
import {Navigate, NavLink, useParams} from "react-router-dom";
import { MyFriendsContainer } from "./MyFriendsContainer";
import store from "../../redux/redux-store";



function Navbar() {
    const params = useParams()
const toUsersProfile = () => {

    <Navigate to={`/profile/${store.getState().auth.id}`} />
}
    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    {/*<button onClick={toUsersProfile}>Profile</button>*/}

                    <NavLink to={"/profile/"+ store.getState().auth.id}
                             className={({isActive}) => (isActive ? s.active : 'inactive')}
                    >Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Dialogs"
                             className={({isActive}) => (isActive ? s.active : 'inactive')}
                    >Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Users"
                             className={({isActive}) => (isActive ? s.active : 'inactive')}
                    >Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/News"
                             className={({isActive}) => (isActive ? s.active : 'inactive')}
                    >News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Music"
                             className={({isActive}) => (isActive ? s.active : 'inactive')}
                    >Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Settings"
                             className={({isActive}) => (isActive ? s.active : 'inactive')}
                    >Settings</NavLink>
                </div>
            </div>
            <div>
                <h3>My Friends</h3>
                <MyFriendsContainer/>
            </div>
        </nav>
    )
}

export default Navbar;