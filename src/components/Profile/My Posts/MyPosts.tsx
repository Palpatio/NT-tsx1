import React, {ChangeEvent} from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redax/state";


type PropsType = {
    posts: Array<PostType>
    addPost: (m: string) => void
    changeNewText: (n: string) => void
    messageForNewPost: string

}
const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)

    let addPost = () => {
        props.addPost(props.message)
    }


    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.changeNewText(e.currentTarget.value)
    }
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.messageForNewPost} onChange={newTextChangeHandler}/>
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