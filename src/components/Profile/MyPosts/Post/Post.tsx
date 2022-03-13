import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likeCounts: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src='https://cspromogame.ru//storage/upload_images/avatars/900.jpg'/>
            {props.message}
            <div>
                <span>{props.likeCounts} like</span>
            </div>
        </div>
    )
}