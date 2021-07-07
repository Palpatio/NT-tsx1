import React, {ChangeEvent} from "react";
import { ActionsType } from "../../../redux/dispatchTypes";
import { ProfilePageType } from "../../../redux/store";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";



type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}
const MyPosts = (props: PropsType) => {
    const postsElements = props.profilePage.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)

    let addPost = () => {
        props.dispatch(addPostAC())
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.profilePage.messageForNewPost} onChange={newTextChangeHandler}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}

export default MyPosts;