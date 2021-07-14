import React, {ChangeEvent} from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../types/types";

type PropsType = {
    profilePageType: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}
const MyPosts = (props: PropsType) => {
    const postsElements = props.profilePageType.posts.map(p =>
        <Post key={p.id} id={p.id} postMessage={p.postMessage} LikeCount={p.LikeCount}/>)

    let addPost = () => {
        props.addPost();
        //props.dispatch(addPostAC())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
        //props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.profilePageType.newPostText} onChange={onPostChange}/>
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