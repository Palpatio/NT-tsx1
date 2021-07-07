export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessageText: string
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsType = SendMessageActionType
    | UpdateNewMessageBodyActionType
    | AddPostActionType
    | UpdateNewPostTextActionType