import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePageType: state.profilePageType
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;