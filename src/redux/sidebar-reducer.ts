import {ActionTypes} from "./redux-store";

export type FriendType = {
    id: number
    name: string
}
export type SidebarType = {
    myFriends: Array<FriendType>
}

const intialState: SidebarType = {
    myFriends: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Irishka'},
        {id: 3, name: 'Svetka'},
        {id: 4, name: 'Писюн'}
    ]
}

const sidebarReducer = (state: SidebarType = intialState, action: ActionTypes):SidebarType => {
    return state
}
export default sidebarReducer