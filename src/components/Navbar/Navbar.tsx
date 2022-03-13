import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {MyFriends} from "./MyFriends";
import {SidebarType} from "../../redux/state";

type NavbarPropsType = {
    sidebar: SidebarType
}

function Navbar({sidebar}:NavbarPropsType) {

    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    <NavLink to="/Profile"
                             className={({isActive}) => (isActive ? s.active : 'inactive')}
                    >Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Dialogs"
                             className={({isActive}) => (isActive ? s.active : 'inactive')}
                    >Messages</NavLink>
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
                <MyFriends myFriends={sidebar.myFriends}/>
            </div>
        </nav>
    )
}

export default Navbar;