import React from "react"
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import {v1} from "uuid";


export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg",
                    followed: true,
                    fullName: "Dmitry",
                    status: "I'm the BOSS",
                    location: {country: "Russia", cityName: "Belgorod"}
                },
                {
                    id: 2,
                    photoUrl: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg",
                    followed: false,
                    fullName: "Tatiana",
                    status: "I'm the BOSS too",
                    location: {country: "Russia", cityName: "Belgorod"}
                },
                {
                    id: 3,
                    photoUrl: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg",
                    followed: true,
                    fullName: "Veronik",
                    status: "I'm the BOSS, me too",
                    location: {country: "Russia", cityName: "Belgorod"}
                }
            ]
        )
    }


    return <div>
        {props.users.map(u => <div className={styles.user} key={u.id}>

            <span>
                <img className={styles.photo} src={u.photoUrl}/>
                <div>
                   {(u.followed) ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                       : <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </span>

                <span className={styles.userdata}>
                    <div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                        </div>
                    <div>
                      <div>{u.location.country}</div>
                <div>{u.location.cityName}</div>

                    </div>
            </span>

            </div>
        )}
    </div>


}
