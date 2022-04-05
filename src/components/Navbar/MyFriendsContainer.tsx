import {FriendType} from "../../redux/sidebar-reducer";
import {connect} from "react-redux";
import {MyFriends} from "./MyFriends";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type MyFriendsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    myFriends: Array<FriendType>
}

type mapDispatchToPropsType = {}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        myFriends: state.sidebar.myFriends
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {}
}
export const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends)