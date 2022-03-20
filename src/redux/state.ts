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

export let state: StateType = {

    profilePage: {
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

}


export let addPost = (newPostmessage: string)=> {
    debugger
    const newPost: PostType = {
        id: new Date().getTime(),
        message: newPostmessage,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost)
}