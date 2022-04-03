import {ActionTypes, SidebarType} from "./redux-store";

const intialState = {
    myFriends: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Irishka'},
        {id: 3, name: 'Svetka'},
        {id: 4, name: 'Писюн'}
    ]
}

const sidebarReducer = (state: SidebarType = intialState, action: ActionTypes) => {
    return state
}
export default sidebarReducer