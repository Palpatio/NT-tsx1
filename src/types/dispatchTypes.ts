
import {UsersType} from "./types";

export type SendMessageAT = {
    type: 'SEND-MESSAGE'
}

export type UpdateNewMessageBodyAT = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessageText: string
}

export type AddPostAT = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type FollowUserAT = {
    type: 'FOLLOW'
    userID: number
}

export type UnfollowUserAT = {
    type: 'UNFOLLOW'
    userID: number
}

export type SetUsersAT = {
    type: 'SET-USERS'
    users: UsersType[]
}

export type ActionsType = SendMessageAT
    | UpdateNewMessageBodyAT
    | AddPostAT
    | UpdateNewPostTextAT
    | FollowUserAT
    | UnfollowUserAT
    | SetUsersAT