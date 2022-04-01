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
    newPostTextChange: (newText: string) => void
    addPost: () => void
    addMessage: (message: string) => void
    onChange: () => void
    subscribe: (callback: () => void) => void
}

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
    onChange() {
        console.log("Hey")
    },
    newPostTextChange(newText: string) {
        this._state.profilePage.newPostText = newText
        this.onChange()
    },
    addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likeCounts: 0
        }
        if (this._state.profilePage.newPostText.length != 0) {
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
        }
        this.onChange()
    },
    addMessage(message: string) {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: message,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this.onChange()
    },
    subscribe(callback) {
        this.onChange = callback
    }
}

// @ts-ignore
window.store = store

