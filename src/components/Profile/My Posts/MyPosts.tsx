import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import { PostType} from "../../../redax/state";


type PropsType = {
    posts: Array<PostType>
    addPost: (m: string) => void

}
const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)

        }
    }

    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea ref={newPostElement} />
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