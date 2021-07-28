import {UsersPageType, UsersType} from "../types/types";
import {ActionsType, FollowUserAT, SetCurrentAT, SetUsersAT, UnfollowUserAT} from "../types/dispatchTypes";


const initialState = {
    items: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1


};

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, items: action.users}
        case "SET-CURRENT":
            return {...state, currentPage: action.currentPage}

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
    return {type: 'SET-USERS', users}
}

export const setCurrentAC = (currentPage: number): SetCurrentAT => {
    return {type: 'SET-CURRENT', currentPage}
}
export default usersReducer;
