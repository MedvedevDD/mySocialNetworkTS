import {ActionTypes} from "./redux-store";

const ADD_MESSAGE = "ADD-MESSAGE"

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

const initialState: DialogsPageType = {
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

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
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
export const addMessageAC = (message: string) => ({type: ADD_MESSAGE, message: message} as const)
export default dialogsReducer;