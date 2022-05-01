import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setAmountOfUsers,
    setCurrentPage, setFirstPageOfPegination,
    setUsers, setUsersPerPage, setToggleIsLoading,
    unFollow,
    UserType, toggleFollowingProgress, getUsersThunkCreator, setUsersPerPageThunkCreator
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Preloader} from "../preloader/Preloader";
import {usersApi} from "../../api/api";

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.usersPerPage, 1)
    }

    setCurrentPage = (p: number) => {
        this.props.getUsersThunkCreator(this.props.usersPerPage, p)
    }
    setUsersPerPage = (e: number) => {
        this.props.setUsersPerPageThunkCreator(e, this.props.currentPage)
    }

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
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   getUsersThunkCreator={this.props.getUsersThunkCreator}
                   setUsersPerPageThunkCreator={this.props.setUsersPerPageThunkCreator}
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
    isLoading: boolean,
    followingInProgress: Array<number>

}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setAmountOfUsers: (allUsers: number) => void
    setFirstPageOfPegination: (firstPaginationPage: number) => void
    setUsersPerPage: (numberOfUsersPerPage: number) => void
    setToggleIsLoading: (isLoading: boolean) => void
    toggleFollowingProgress: (userId: number, followingInProgress:boolean)=>void
    getUsersThunkCreator: (usersPerPage:number, currentUsersPage:number)=>void
    setUsersPerPageThunkCreator: (e:number, currentPage:number) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        amountOfUsers: state.usersPage.amountOfUsers,
        currentPage: state.usersPage.currentPage,
        usersPerPage: state.usersPage.usersPerPage,
        firstPageOfPagination: state.usersPage.firstPageOfPagination,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}


// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setAmountOfUsers: (allUsers: number) => {
//             dispatch(setAmountOfUsersAC(allUsers))
//         },
//         setFirstPageOfPegination: (firstPaginationPage: number) => {
//             dispatch(setFirstPageOfPeginationAC(firstPaginationPage))
//         },
//         setUsersPerPage: (numberOfUsersPerPage: number) => {
//             dispatch(setUsersPerPageAC(numberOfUsersPerPage))
//         },
//         setToggleIsLoading: (isLoading: boolean) => {
//             dispatch(toggleIsLoadingAC(isLoading))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setAmountOfUsers, setFirstPageOfPegination,
    setUsersPerPage, setToggleIsLoading, toggleFollowingProgress, getUsersThunkCreator, setUsersPerPageThunkCreator
})(UsersContainer)