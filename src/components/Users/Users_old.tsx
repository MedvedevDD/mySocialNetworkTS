import React from "react"
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import {v1} from "uuid";
import axios from "axios";
import userPhoto from "../../assets/user.png"

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })

    }


    return <div>
        {props.users.map(u =>
            <div className={styles.user} key={u.id}>

            <span className={styles.avatar}>
                <img className={styles.photo} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                <div className={styles.button__element}>
                   {(u.followed) ?
                       <button className={styles.button} onClick={() => props.unFollow(u.id)}>UnFollow</button>
                       : <button className={styles.button} onClick={() => props.follow(u.id)}>Follow</button>
                   }
                </div>
            </span>

                <div className={styles.userdata}>
                    <div className={styles.nameModule}>
                        <div className={styles.userName}>{u.name}</div>
                        <div className={styles.status}>{u.status ? u.status : "Статус отсутствует"}</div>
                    </div>
                    <div className={styles.location}>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.cityName"}</div>
                    </div>
                </div>

            </div>
        )}
    </div>


}
