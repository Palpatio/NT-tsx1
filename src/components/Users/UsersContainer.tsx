import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {UsersType} from "../../types/types";
import {AppDispatch, AppStateType} from "../../redux/redux-store";
import UsersClassComponent from "./UsersClassComponent";


const mapStateToProps = (state: AppStateType) => {
    return {
        usersPageType: state.usersPageType
    }
}

const mapDispatchToProps = (dispatch:AppDispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersType[])=> {
            dispatch(setUsersAC(users))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (UsersClassComponent);

export default MyPostsContainer;