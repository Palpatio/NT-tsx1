import React from "react";
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redax/state";

type PropsType={
    message:MessageType
}


const Message = (props:PropsType) => {
    return <div className={s.dialogs}>{props.message.message}</div>
}

export default Message;