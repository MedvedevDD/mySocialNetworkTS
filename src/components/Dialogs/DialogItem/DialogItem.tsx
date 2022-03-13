import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}

export function DialogItem(props:DialogItemPropsType) {
    return (
        <div className={s.dialog }>
        <NavLink to={"/Dialogs/" + props.id} className={({ isActive }) => (isActive ? s.active : 'inactive')}>{props.name}</NavLink>
    </div>
)
}