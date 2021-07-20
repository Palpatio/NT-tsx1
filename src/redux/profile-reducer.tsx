import {PostType, ProfilePageType} from "../types/types";
import {ActionsType, AddPostAT, UpdateNewPostTextAT} from "../types/dispatchTypes";

const initialState = {
    posts: [
        {id: 1, postMessage: 'Hello  ', likeCount: 14},
        {id: 2, postMessage: 'Q', likeCount: 21},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'ADD-POST': {
            const newPost: PostType = {
                id: 5,
                postMessage: state.newPostText,
                likeCount: 0
            };
            if (newPost.postMessage.trim() !== '') {
                return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    newPostText: ''
                }
            } else {
                return state
            }
        }
        default:
            return state;
    }
}


export const addPostAC = (): AddPostAT =>
    ({type: 'ADD-POST'})

export const updateNewPostTextAC = (text: string): UpdateNewPostTextAT =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer;
