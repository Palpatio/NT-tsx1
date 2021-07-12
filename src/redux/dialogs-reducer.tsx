import {ActionsType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./dispatchTypes";
import {DialogsPageType, MessageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


const initialState = {
    dialogs: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Roman'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hello'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
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