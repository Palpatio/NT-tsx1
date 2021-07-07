import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {ActionsType} from "../../redux/dispatchTypes";
import {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}
const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem dialog={d}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m}/>)

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            placeholder="Enter"
                            value={props.dialogsPage.newMessageBody}
                            onChange={onMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;