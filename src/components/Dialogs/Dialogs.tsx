import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = ({dialogsPage, ...rest}: DialogsPropsType) => {


    const dialogsElement = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messageElement = dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    //let newMessageRef = React.createRef<HTMLTextAreaElement>()

    const [newMessage, setNewMessage] = useState<string>("")

    const onNewMessageTextHandlder = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value)
    }
    const addNewMessage = () => {
        rest.addNewMessage(newMessage)
        setNewMessage("")
    }
    const onEnterKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            addNewMessage()
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea onKeyPress={onEnterKeyPress} onChange={onNewMessageTextHandlder} value={newMessage}
                          placeholder={"TypeIn your message here"}/>
                <button onClick={addNewMessage}>Add Message</button>
            </div>
        </div>

    )
}
export default Dialogs;