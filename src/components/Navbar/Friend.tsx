import {NavLink} from "react-router-dom";
import s from "./Friend.module.css"

type MyFriendPropsType = {
    id: number
    name: string
}
export const MyFriend = ({id, name}: MyFriendPropsType) => {
    let path: string = "/Friends/" + id
    return (
        <div className={s.item}>
            <NavLink to={path}
                     className={({isActive}) => (isActive ? s.active : "")}>{name}</NavLink>
        </div>
    )
}