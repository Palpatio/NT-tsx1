import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {DialogsPageType} from "../../redax/state";

type PropsType={
    dialogsPage:DialogsPageType
}


const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem dialog={d}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;