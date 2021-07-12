import React, {ChangeEvent} from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.messageForNewPost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;