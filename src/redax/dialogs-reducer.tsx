import {ActionsType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./dispatchTypes";
import {DialogsPageType, MessageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessageBody: MessageType = {
                id: 6,
                message: state.newMessageBody
            };
            state.messages.push(newMessageBody)
            state.newMessageBody = ''
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageText
            return state;
    }
    return state;
}

export const sendMessageAC = (): SendMessageActionType =>
    ({type: SEND_MESSAGE})

export const updateNewMessageBodyAC = (text: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessageText: text})

export default dialogsReducer;