import React from 'react';
import {addMessageAC} from '../../redux/dialogs-reducer';
import {DialogsPageType} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect, useDispatch} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from "../../hoc/AuthRedirect";


/*const DialogsContainer = ({dialogsPage, ...rest}: DialogsPropsType) => {

   // const dispatch = useDispatch()

    const addNewMessage = (newMessage: string) => {
        dispatch(addMessageAC(newMessage))
    }
    return <Dialogs dialogsPage={dialogsPage} addNewMessage={addNewMessage}/>
}*/

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
    // authProgress: boolean | undefined
}
type MapDispatchToPropsType = {
    addNewMessage: (newMessage: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        // authProgress: state.auth.isAutherized
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}
// let AuthRedirectComponent = (props:any) => {
//     //@ts-ignore
//     if (!props.authProgress) return <Navigate to={"/Login"}/>
//     return <Dialogs {...props}/>
// }
// const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);