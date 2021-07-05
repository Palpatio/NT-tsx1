export type StoreType = {
    _state: RootStateType
    _rerenderTree: () => void
    getState: () => RootStateType
    changeNewText: (newText: string) => void
    addPost: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changNewTextAC>
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const changNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}


const store: StoreType = {
    _state: {
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

    },
    _rerenderTree() {
        console.log('State changed')
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._rerenderTree()
    },
    addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.messageForNewPost,
            LikesCount: 0
        }
        this._state.profilePage.posts.push();
        this._state.profilePage.messageForNewPost = '';
        this._rerenderTree();
    },
    subscribe(callback) {
        this._rerenderTree = callback
    },
    getState() {
        return this._state;
    },
    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                LikesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = '';
            this._rerenderTree();
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._rerenderTree()
        }
    }
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


export default store;