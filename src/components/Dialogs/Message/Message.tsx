import React from 'react';
import s from "./../Dialogs.module.css";



type MessagePropsType = {
    message: string
}

export function Message(message:MessagePropsType) {
    return  <div className={s.message}> {message.message} </div>
}

