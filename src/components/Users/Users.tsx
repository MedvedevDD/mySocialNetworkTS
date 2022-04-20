import React, {ChangeEvent, KeyboardEvent} from "react"

import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import {v1} from "uuid";
import axios from "axios";
import userPhoto from "../../assets/user.png"
import {UsersStateType} from "../../redux/users-reducer";

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setAmountOfUsers(response.data.totalCount)
            })
    }

    setCurrentPage = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    setUsersPerPage = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            this.props.setUsersPerPage(Number(e.currentTarget.value))
            }
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    // const setAmountOfUsersPerPage = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Enter") {
    //         this.props.setUsersPerPage(Number(e.currentTarget.value))
    //     }
    // }
    render() {
        let p = this.props.firstPageOfPagination;
        let pageNumberArray = [];
        while (p < this.props.firstPageOfPagination + 10) {
            pageNumberArray.push(p);
            p++
        }
        const setNextPage = () => {
            this.props.setFirstPageOfPegination(p)
        }
        const setPreviousPage = () => {
            this.props.setFirstPageOfPegination(p - 20)
        }
        let pages = [];
        let pageAmount = Math.ceil(this.props.amountOfUsers / this.props.usersPerPage);
        for (let i = 1; i <= pageAmount; i++) {
            pages.push(i)
        }

        // @ts-ignore
        return <div>


            {/*<div className={styles.users_pages}>*/}
            {/*    {pages.map(p => <span className={`${styles.page} + ${this.props.currentPage === p && styles.active}`}*/}
            {/*                          onClick={() => {*/}
            {/*                              this.setCurrentPage(p)*/}
            {/*                          }}>{p}</span>)}*/}
            {/*</div>*/}
            <div className={styles.users_pages}>

                <ul>
                    <li className={styles.page} onClick={setPreviousPage}>Назад</li>
                    {pageNumberArray.map(p => <li
                        className={`${styles.page} + ${this.props.currentPage === p && styles.active}`}
                        onClick={() => {
                            this.setCurrentPage(p)
                        }}>{p}</li>)}
                    <input className={styles.inputUsersPerPage} type={"number"} title={"Количество на странице"}
                           placeholder={`${this.props.usersPerPage}`}
                           onKeyPress={(e:KeyboardEvent<HTMLInputElement>) => this.setUsersPerPage(e)}/>
                    <li className={styles.page} onClick={setNextPage}>Вперед</li>
                </ul>

            </div>
            {

                this.props.users.map(u =>
                        <div className={styles.user} key={u.id}>

            <span className={styles.avatar}>
                <img className={styles.photo} src={u.photos.small != null ? u.photos.small : userPhoto}
                     alt={"User Avatar"}/>
                <div className={styles.button__element}>
                   {(u.followed) ?
                       <button className={styles.button} onClick={() =>
                           this.props.unFollow(u.id)}>UnFollow</button>
                       : <button className={styles.button} onClick={() =>
                           this.props.follow(u.id)}>Follow</button>
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
}

export default Users;