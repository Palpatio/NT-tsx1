import {UsersPageType, UsersType} from "../types/types";
import {ActionsType, FollowUserAT, SetUsersAT, UnfollowUserAT} from "../types/dispatchTypes";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
    items: [],
};

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case 'SET-USERS':
           let a =  {...state, items: [...state.items, ...action.users]}
            debugger
            return a
        default:
            return state;
    }
}

export const followAC = (userID: number): FollowUserAT => {
    return {type: 'FOLLOW', userID}
}

export const unfollowAC = (userID: number): UnfollowUserAT => {
    return {type: 'UNFOLLOW', userID}
}

export const setUsersAC = (users: UsersType[]): SetUsersAT => {
    debugger
    return {type: 'SET-USERS', users}
}
export default usersReducer;
