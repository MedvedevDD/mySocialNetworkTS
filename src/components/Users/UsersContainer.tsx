import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setAmountOfUsers,
    setCurrentPage,
    setFirstPageOfPegination,
    setUsers,
    setUsersPerPage,
    setToggleIsLoading,
    unFollow,
    UserType,
    toggleFollowingProgress,
    getUsersThunkCreator,
    setUsersPerPageThunkCreator,
    unfollowBtnThunkCreator,
    followBtnThunkCreator
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Preloader} from "../preloader/Preloader";
import Dialogs from "../Dialogs/Dialogs";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

export type UsersContainerPropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

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
        // if (!this.props.authProgress) return <Navigate to={"/Login"}/>

        return <>
            {this.props.isLoading ? <Preloader/> : null}
            <Users firstPageOfPagination={this.props.firstPageOfPagination}
                   setFirstPageOfPegination={this.props.setFirstPageOfPegination}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.setCurrentPage}
                   usersPerPage={this.props.usersPerPage}
                   setUsersPerPage={this.setUsersPerPage}
                   users={this.props.users}
                   amountOfUsers={this.props.amountOfUsers}
                   followingInProgress={this.props.followingInProgress}
                   unfollowBtnThunkCreator={this.props.unfollowBtnThunkCreator}
                   followBtnThunkCreator={this.props.followBtnThunkCreator}
            />
        </>

    }
}

// let AuthRedirectComponent = (props:any) => {
//     if (!props.authProgress) return <Navigate to={"/Login"}/>
//
//     return <UsersContainer {...props}/>
// }

type MapStateToPropsType = {
    users: Array<UserType>,
    amountOfUsers: number,
    currentPage: number,
    usersPerPage: number,
    firstPageOfPagination: number,
    isLoading: boolean,
    followingInProgress: Array<number>,
    // authProgress: any

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
    toggleFollowingProgress: (userId: number, followingInProgress: boolean) => void
    getUsersThunkCreator: (usersPerPage: number, currentUsersPage: number) => void
    setUsersPerPageThunkCreator: (e: number, currentPage: number) => void
    unfollowBtnThunkCreator: (uId: number) => void
    followBtnThunkCreator: (uId: number) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        amountOfUsers: state.usersPage.amountOfUsers,
        currentPage: state.usersPage.currentPage,
        usersPerPage: state.usersPage.usersPerPage,
        firstPageOfPagination: state.usersPage.firstPageOfPagination,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
        // authProgress: state.auth.isAutherized
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

// export default withAuthRedirect(connect(mapStateToProps, {
//     follow, unFollow, setUsers, setCurrentPage, setAmountOfUsers, setFirstPageOfPegination,
//     setUsersPerPage, setToggleIsLoading, toggleFollowingProgress, getUsersThunkCreator, setUsersPerPageThunkCreator,
//     unfollowBtnThunkCreator, followBtnThunkCreator
// })(UsersContainer))
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unFollow, setUsers, setCurrentPage, setAmountOfUsers, setFirstPageOfPegination,
        setUsersPerPage, setToggleIsLoading, toggleFollowingProgress, getUsersThunkCreator, setUsersPerPageThunkCreator,
        unfollowBtnThunkCreator, followBtnThunkCreator
    }),
    withAuthRedirect,
)(UsersContainer)