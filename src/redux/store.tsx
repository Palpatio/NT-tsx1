import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ActionsType} from "./dispatchTypes";

export type StoreType = {
    _state: RootStateType
    _rerenderTree: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
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
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

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
            ],
            newMessageBody: ''
        },

    },
    _rerenderTree() {
        console.log('State changed')
    },

    subscribe(callback) {
        this._rerenderTree = callback
    },
    getState() {
        return this._state;
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderTree()

    }
}

export default store;