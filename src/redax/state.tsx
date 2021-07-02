export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: () => void
    _rerenderTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType

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
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = '';
        this._rerenderTree();
    },
    _rerenderTree() {
        console.log('State changed')
    },
    subscribe(callback) {
        this._rerenderTree = callback
    },
    getState() {
        return this._state;
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