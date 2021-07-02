import {callbackify} from "util";

let rerenderTree =()=> {
    console.log('State changed')
}


export const subscribe=(callback:()=>void)=>{
    rerenderTree=callback;
}


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
    messageForNewPost: string

}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}


const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'vvftt', LikesCount: 10},
            {id: 2, message: 'kiig', LikesCount: 10},
        ],
        messageForNewPost: ''
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

export const addPost = () => {
    debugger;
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.messageForNewPost,
        LikesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.messageForNewPost = '';
    rerenderTree();
}

export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    rerenderTree()
}


export default state;