import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, newPostTextChangeAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
export type AppRootStateType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store;
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
export type FriendType = {
    id: number
    name: string
}
export type SidebarType = {
    myFriends: Array<FriendType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newPostTextChangeAC>
    | ReturnType<typeof addMessageAC>

//@ts-ignore
window.store = store