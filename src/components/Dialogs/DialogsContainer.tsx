import React from 'react';
import {addMessageAC} from '../../redux/dialogs-reducer';
import {DialogsPageType} from "../../redux/redux-store";
import Dialogs from './Dialogs';
import {useDispatch} from "react-redux";


type DialogsPropsType = {
    dialogsPage: DialogsPageType

}

const DialogsContainer = ({dialogsPage, ...rest}: DialogsPropsType) => {

    const dispatch = useDispatch()

    const addNewMessage = (newMessage: string) => {
        dispatch(addMessageAC(newMessage))
    }

    return <Dialogs dialogsPage={dialogsPage} addNewMessage={addNewMessage}/>

}
export default DialogsContainer;