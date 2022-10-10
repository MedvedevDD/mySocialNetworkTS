import React from 'react';
import {addMessageAC} from '../../redux/dialogs-reducer';
import {DialogsPageType} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect, useDispatch} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';


/*const DialogsContainer = ({dialogsPage, ...rest}: DialogsPropsType) => {

   // const dispatch = useDispatch()

    const addNewMessage = (newMessage: string) => {
        dispatch(addMessageAC(newMessage))
    }
    return <Dialogs dialogsPage={dialogsPage} addNewMessage={addNewMessage}/>
}*/

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
    authProgress: boolean | undefined
}
type MapDispatchToPropsType = {
    addNewMessage: (newMessage: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        authProgress: state.auth.isAutherized
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;