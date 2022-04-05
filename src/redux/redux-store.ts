import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, newPostTextChangeAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store;
type DialogType = {
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