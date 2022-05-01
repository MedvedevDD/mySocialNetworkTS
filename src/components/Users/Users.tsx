import React from "react"
import styles from "./Users.module.css";
import userPhoto from "../../assets/user.png"
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";
import upImg from "../../assets/images/UpArrow.png"

const Users = (props: UsersPropsType) => {
    let pageAmount = Math.ceil(props.amountOfUsers / props.usersPerPage)

    let p = props.firstPageOfPagination;
    let pageNumberArray = [];
    // if (p=1) { setPreviousBtnDisabled(true)   }
    (p < 1) && props.setFirstPageOfPegination(1)
    while (p < props.firstPageOfPagination + 10 && p <= pageAmount) {
        pageNumberArray.push(p);
        p++

    }

    const setNextPage = () => {
        props.setFirstPageOfPegination(p)
    }
    const setPreviousPage = () => {
        props.setFirstPageOfPegination(p - 20)
    }
    // let pages = [];
    // let pageAmount = Math.ceil(this.props.amountOfUsers / this.props.usersPerPage);
    // for (let i = 1; i <= pageAmount; i++) {
    //     pages.push(i)
    // }

    return <div className={styles.allBigUsersList}>


        {/*<div className={styles.users_pages}>*/}
        {/*    {pages.map(p => <span className={`${styles.page} + ${this.props.currentPage === p && styles.active}`}*/}
        {/*                          onClick={() => {*/}
        {/*                              this.setCurrentPage(p)*/}
        {/*                          }}>{p}</span>)}*/}
        {/*</div>*/}
        <div className={styles.users_pages}>

            <ul>
                <button disabled={props.firstPageOfPagination === 1 ? true : false} className={styles.button}
                        onClick={setPreviousPage}>Назад
                </button>
                {pageNumberArray.map(p => <li
                    className={`${styles.page} + ${props.currentPage === p && styles.active}`}
                    onClick={() => {
                        props.setCurrentPage(p)
                    }}>{p}</li>)}
                {/*<input className={styles.inputUsersPerPage} type={"number"} title={"Количество на странице"}*/}
                {/*       placeholder={`${this.props.usersPerPage}`}*/}
                {/*       onKeyPress={(e:KeyboardEvent<HTMLInputElement>) => this.setUsersPerPage(e)}/>*/}
                <button disabled={p > pageAmount ? true : false} className={styles.button}
                        onClick={setNextPage}>Вперед
                </button>
                <select className={styles.select__item}
                        onChange={(e) => props.setUsersPerPage(Number(e.currentTarget.value))}
                        title={"Количество на странице"}>
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </ul>

        </div>
        {
            props.users.map(u =>
                    <div className={styles.user} key={u.id}>

            <span className={styles.avatar}>
                <NavLink to={"/profile/" + u.id}>
                <img className={styles.photo} src={u.photos.small != null ? u.photos.small : userPhoto}
                     alt={"User Avatar"}/>
                </NavLink>
                <div className={styles.button__element}>
                   {(u.followed) ?
                       <button disabled={props.followingInProgress.some(id => id === u.id)} className={styles.button}
                               onClick={() => {
                                   props.toggleFollowingProgress(u.id, true)
                                   usersApi.unfollowButton(u.id)
                                       .then(response => {
                                           if (response.data.resultCode === 0) {
                                               props.unFollow(u.id)
                                           }
                                           props.toggleFollowingProgress(u.id, false)
                                       })

                               }

                               }>UnFollow</button>
                       : <button disabled={props.followingInProgress.some(id => id === u.id)} className={styles.button}
                                 onClick={() => {
                                     props.toggleFollowingProgress(u.id, true)
                                     usersApi.followButton(u.id)
                                         .then(response => {
                                             if (response.data.resultCode === 0) {
                                                 props.follow(u.id)
                                             }
                                             props.toggleFollowingProgress(u.id, false)
                                         })
                                 }


                                 }>Follow</button>
                   }
                </div>
            </span>

                        <div className={styles.userdata}>
                            <div className={styles.nameModule}>

                                <NavLink to={"/profile/" + u.id} className={styles.userName}>{u.name}</NavLink>

                                <div className={styles.status}>{u.status ? u.status : "Статус отсутствует"}</div>
                            </div>
                            <div className={styles.location}>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.cityName"}</div>
                            </div>
                        </div>

                    </div>
            )}
        <div>
            <img src={upImg} className={styles.btn_up} onClick={()=>{
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });}
            }/>
        </div>
    </div>


}

export default Users;