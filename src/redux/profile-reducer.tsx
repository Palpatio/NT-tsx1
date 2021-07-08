import {PostType, ProfilePageType} from "./store";
import {ActionsType, AddPostActionType, UpdateNewPostTextActionType} from "./dispatchTypes";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState = {
    posts: [
        {id: 1, message: 'vvftt', LikesCount: 10},
        {id: 2, message: 'kiig', LikesCount: 10},
    ],
    messageForNewPost: ''
};
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                LikesCount: 0
            };
            state.posts.push(newPost);
            state.messageForNewPost = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText;
            return state;
        default:
            return state;

    }

}


export const addPostAC = (): AddPostActionType =>
    ({type: ADD_POST})

export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
