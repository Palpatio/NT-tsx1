import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    const onMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))
                    }

                    const sendMessage = () => {
                        store.dispatch(sendMessageAC())
                    }

                    return (
                        <Dialogs updateNewMessageBody={onMessageChange}
                                 sendMessage={sendMessage}
                                 dialogs={state.dialogsPage.dialogs}
                                 message={state.dialogsPage.messages}
                                 newMessageText={state.dialogsPage.newMessageBody}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;