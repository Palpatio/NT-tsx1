import React from "react";
import s from './Post.module.css'



type PropsType={
    message:string
    LikesCount: number
}

const Post = (props: PropsType) => {
    return <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU'/>
        {props.message}
        <div>
            <span>{props.LikesCount}</span>
        </div>

    </div>
}

export default Post;