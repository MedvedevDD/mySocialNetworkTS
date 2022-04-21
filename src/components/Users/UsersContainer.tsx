import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setAmountOfUsersAC,
    setCurrentPageAC, setFirstPageOfPeginationAC,
    setUsersAC, setUsersPerPageAC, toggleIsLoadingAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

import axios from "axios";
import {Preloader} from "../preloader/Preloader";

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setToggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setToggleIsLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setAmountOfUsers(response.data.totalCount)
            })
    }

    setCurrentPage = (p: number) => {
        this.props.setToggleIsLoading(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setToggleIsLoading(false)
                this.props.setUsers(response.data.items)
            })
    }
    setUsersPerPage = (e: number) => {
        this.props.setToggleIsLoading(true)
        this.props.setUsersPerPage(e)
        this.props.setCurrentPage(1)
        this.props.setFirstPageOfPegination(1)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${e}`)
            .then(response => {
                this.props.setToggleIsLoading(false)
                this.props.setUsers(response.data.items)
            })
    }
    // const setAmountOfUsersPerPage = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Enter") {
    //         this.props.setUsersPerPage(Number(e.currentTarget.value))
    //     }
    // }
    render() {

        return <>
            {this.props.isLoading ? <Preloader/> : null}
            <Users firstPageOfPagination={this.props.firstPageOfPagination}
                   setFirstPageOfPegination={this.props.setFirstPageOfPegination}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.setCurrentPage}
                   usersPerPage={this.props.usersPerPage}
                   setUsersPerPage={this.setUsersPerPage}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   amountOfUsers={this.props.amountOfUsers}
                   setAmountOfUsers={this.props.setAmountOfUsers}
                   setUsers={this.props.setUsers}
                   setToggleIsLoading={this.props.setToggleIsLoading}
                   isLoading={this.props.isLoading}
            />
        </>

    }
}

type MapStateToPropsType = {
    users: Array<UserType>,
    amountOfUsers: number,
    currentPage: number,
    usersPerPage: number,
    firstPageOfPagination: number,
    isLoading: boolean

}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setAmountOfUsers: (allUsers: number) => void
    setFirstPageOfPegination: (firstPaginationPage: number) => void
    setUsersPerPage: (numberOfUsersPerPage: number) => void
    setToggleIsLoading: (isLoading: boolean) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        amountOfUsers: state.usersPage.amountOfUsers,
        currentPage: state.usersPage.currentPage,
        usersPerPage: state.usersPage.usersPerPage,
        firstPageOfPagination: state.usersPage.firstPageOfPagination,
        isLoading: state.usersPage.isLoading
    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setAmountOfUsers: (allUsers: number) => {
            dispatch(setAmountOfUsersAC(allUsers))
        },
        setFirstPageOfPegination: (firstPaginationPage: number) => {
            dispatch(setFirstPageOfPeginationAC(firstPaginationPage))
        },
        setUsersPerPage: (numberOfUsersPerPage: number) => {
            dispatch(setUsersPerPageAC(numberOfUsersPerPage))
        },
        setToggleIsLoading: (isLoading: boolean) => {
            dispatch(toggleIsLoadingAC(isLoading))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)