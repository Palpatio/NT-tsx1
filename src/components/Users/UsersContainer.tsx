import {followAC, setCurrentAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {UsersType} from "../../types/types";
import {AppDispatch, AppStateType} from "../../redux/redux-store";
import UsersClassComponent from "./UsersClassComponent";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPageType: state.usersPageType,
        pageSize: state.usersPageType.pageSize,
        totalUsersCount: state.usersPageType.totalUsersCount,
        setCurrentPage: state.usersPageType.currentPage
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentAC(currentPage))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);

export default MyPostsContainer;