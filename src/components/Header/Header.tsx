import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthStateType} from "../../redux/auth-reducer";

export type HeaderPropsType = {
    auth: AuthStateType
}

function Header(props: HeaderPropsType) {
    return (
        <div className={s.header}>
            <div>
                <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'/>
            </div>
            <div className={s.loginBlock}>
                {props.auth.isAutherized
                    ? `Привет, ${props.auth.login}` :
                    <NavLink className={s.loginTitle} to="/Login/*">Login</NavLink>
                }
            </div>
        </div>
    )
}

export default Header;