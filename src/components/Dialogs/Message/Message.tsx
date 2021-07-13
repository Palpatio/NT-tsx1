import React from "react";
import s from './../Dialogs.module.css';
import {MessageType} from "../../../types/types";


const Message = (props:MessageType) => {
    return <div className={s.dialogs}>{props.message}</div>
}

export default Message;