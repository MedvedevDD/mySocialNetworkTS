/*import {ActionTypes, StateType} from "./redux-store";


export type StoreType = {
    _state: StateType
    getState: () => StateType
    onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}*/

/*let store: StoreType = {
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
}*/
export default "1"

// @ts-ignore
//window.store = store

