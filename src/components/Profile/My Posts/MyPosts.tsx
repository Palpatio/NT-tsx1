import React, {ChangeEvent} from "react";
import {PostType, ProfilePageType} from "../../../redux/store";
import s from './MyPost.module.css'
import Post from "./Post/Post";

type PropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}
const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)

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
                <textarea value={props.newPostText} onChange={onPostChange}/>
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