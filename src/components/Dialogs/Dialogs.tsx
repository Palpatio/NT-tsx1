import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {ChangeEvent} from "react";
import {DialogsPageType} from "../../types/types";


type PropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

function Dialogs(props: PropsType) {
    const dialogsItems = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messageItems = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    const onClickSendMessage = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messageItems}
                <div>
                    <div>
                        <textarea
                            placeholder="type your message"
                            value={props.dialogsPage.newMessageText}
                            onChange={onMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onClickSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;