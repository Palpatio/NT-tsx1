import React from "react";
import {rerenderEntireTree} from "../render";


export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    LikesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}


const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'vvftt', LikesCount: 10},
            {id: 2, message: 'kiig', LikesCount: 10},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Roman'},
            {id: 2, name: 'Roman'},
            {id: 3, name: 'Roman'}
        ],
        messages: [
            {id: 1, message: 'ffff'},
            {id: 2, message: 'fffffv'},
            {id: 3, message: 'bfbfbf'}
        ]
    }

}

export const addPost = (postText: string) => {
    debugger;
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        LikesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export default state;