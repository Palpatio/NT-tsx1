import {PostType, ProfilePageType} from "../types/types";
import { AddPostAT, UpdateNewPostTextAT} from "../types/dispatchTypes";
import {AppDispatch} from "./redux-store";


const initialState = {
    posts: [
        {id: 1, message: 'vvftt', LikesCount: 10},
        {id: 2, message: 'kiig', LikesCount: 10},
    ],
    messageForNewPost: 'it-kamasutra.com'
};
const profileReducer = (state: ProfilePageType = initialState, action: AppDispatch) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                LikesCount: 10
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }

}


export const addPostAC = (): AddPostAT =>
    ({type: 'ADD-POST'})

export const updateNewPostTextAC = (text: string): UpdateNewPostTextAT =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer;
