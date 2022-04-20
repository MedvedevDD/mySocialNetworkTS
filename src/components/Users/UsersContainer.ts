import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setAmountOfUsersAC,
    setCurrentPageAC, setFirstPageOfPeginationAC,
    setUsersAC, setUsersPerPageAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType
type MapStateToPropsType = {
    users: Array<UserType>,
    amountOfUsers: number,
    currentPage: number,
    usersPerPage: number,
    firstPageOfPagination:number
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setAmountOfUsers: (allUsers: number) => void
    setFirstPageOfPegination: (firstPaginationPage: number) => void
    setUsersPerPage: (numberOfUsersPerPage:number) => void
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        amountOfUsers: state.usersPage.amountOfUsers,
        currentPage: state.usersPage.currentPage,
        usersPerPage: state.usersPage.usersPerPage,
        firstPageOfPagination: state.usersPage.firstPageOfPagination
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
        setFirstPageOfPegination: (firstPaginationPage:number) => {
            dispatch(setFirstPageOfPeginationAC(firstPaginationPage))
        },
        setUsersPerPage: (numberOfUsersPerPage:number) => {
            dispatch(setUsersPerPageAC(numberOfUsersPerPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)