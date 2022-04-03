import profileReducer, {addPostAC, newPostTextChangeAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
export type StoreType = {
    _state: StateType
    getState: () => StateType
    onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newPostTextChangeAC>
    | ReturnType<typeof addMessageAC>

export let store: StoreType = {
    _state: {

        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: "Hello", likeCounts: 10},
                {id: 2, message: "How are you", likeCounts: 15}
            ]
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Aloha"}
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Tatiana"},
                {id: 3, name: "Veronika"},
                {id: 4, name: "Sergey"},
                {id: 5, name: "Sveta"}
            ]
        },
        sidebar: {
            myFriends: [
                {id: 1, name: 'Dimon'},
                {id: 2, name: 'Irishka'},
                {id: 3, name: 'Svetka'},
                {id: 4, name: 'Писюн'}
            ]
        }

    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this.onChange = callback
    },
    onChange() {
        console.log("Hey")
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)
        this.onChange()
    }
}


// @ts-ignore
window.store = store

