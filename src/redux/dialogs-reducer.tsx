import {ActionsType, SendMessageAT, UpdateNewMessageBodyAT} from "../types/dispatchTypes";
import {DialogsPageType, MessageType} from "../types/types";

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
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessageBody: MessageType = {
                id: 6,
                message: state.newMessageText
            };
            state.messages.push(newMessageBody)
            state.newMessageText = ''
            return state;
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageText = action.newMessageText
            return state;
    }
    return state;
}

export const sendMessageAC = (): SendMessageAT =>
    ({type: 'SEND-MESSAGE'})

export const updateNewMessageBodyAC = (text: string): UpdateNewMessageBodyAT =>
    ({type: 'UPDATE-NEW-MESSAGE-BODY', newMessageText: text})

export default dialogsReducer;