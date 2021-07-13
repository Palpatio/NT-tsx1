import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../types/types";



const Post: React.FC<PostType> = (props) => {
    return <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU'/>
        {props.postMessage}
        <div>
            <span>{props.LikeCount}</span>
        </div>

    </div>
}

export default Post;