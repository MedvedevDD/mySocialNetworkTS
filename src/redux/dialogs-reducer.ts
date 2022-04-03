import {ActionTypes, DialogsPageType, MessageType} from "./redux-store";

const ADD_MESSAGE = "ADD-MESSAGE"

const initialState = {
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
}

const dialogsReducer = (state:DialogsPageType = initialState, action:ActionTypes):DialogsPageType => {
    switch (action.type){
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.message,
            }
            state.messages.push(newMessage)
            return state;
        default:
            return state
    }

}
export const addMessageAC = (message:string) =>({type: ADD_MESSAGE, message:message} as const)
export default dialogsReducer;