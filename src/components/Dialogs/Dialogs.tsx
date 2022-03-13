import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType

}

const Dialogs = ({dialogsPage}: DialogsPropsType) => {


    const dialogsElement = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageElement = dialogsPage.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>

    )
}
export default Dialogs;