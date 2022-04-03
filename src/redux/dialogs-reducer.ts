import {ActionTypes, DialogsPageType, MessageType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"



const dialogsReducer = (state:DialogsPageType, action:ActionTypes):DialogsPageType => {
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