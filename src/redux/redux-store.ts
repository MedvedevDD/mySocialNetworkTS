import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer, {
    addPostAC, changeUserProfileStatusThunkCreator,
    newPostTextChangeAC,
    setUserProfileAC,
    setUserProfileStatusAC
} from "./profile-reducer";
import dialogsReducer, {addMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    follow,
    setAmountOfUsers,
    setCurrentPage,
    setFirstPageOfPegination,
    setUsers, setUsersPerPage, setToggleIsLoading,
    unFollow, toggleFollowingProgress
} from "./users-reducer";
import authReducer, {delUserLoginData, setUserData} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
/*type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type PostType = {
    id: number
    message: string
    likeCounts: number
}
type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}
type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
type FriendType = {
    id: number
    name: string
}
type SidebarType = {
    myFriends: Array<FriendType>
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}*/
export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newPostTextChangeAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setAmountOfUsers>
    | ReturnType<typeof setFirstPageOfPegination>
    | ReturnType<typeof setUsersPerPage>
    | ReturnType<typeof setToggleIsLoading>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof delUserLoginData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setUserProfileStatusAC>
    // | ReturnType<typeof changeUserProfileStatusAC>

//@ts-ignore
window.store = store