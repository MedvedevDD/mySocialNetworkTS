import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType
type MapStateToPropsType = {
    users: Array<UserType>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)