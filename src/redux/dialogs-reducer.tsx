import {ActionsType, SendMessageAT, UpdateNewMessageBodyAT} from "../types/dispatchTypes";
import {DialogsPageType, MessageType} from "../types/types";

const initialState = {
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Nike'},
    ],

    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Yo-Yo'},
        {id: 3, message: 'Hi'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }
        case 'SEND-MESSAGE': {
            const newMessageBody: MessageType = {
                id: 6,
                message: state.newMessageText
            };
            if (newMessageBody.message.trim() !== '') {
                return {
                    ...state,
                    messages: [...state.messages, newMessageBody],
                    newMessageText: ''
                }
            } else {
                return state
            }
        }
        default:
            return state;
    }
}

export const sendMessageAC = (): SendMessageAT =>
    ({type: 'SEND-MESSAGE'})

export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyAT =>
    ({type: "UPDATE-NEW-MESSAGE-BODY", newMessageText: body})

export default dialogsReducer;