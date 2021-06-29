import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";


const MyPosts = (props: any) => {
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message='hfhfjfjkf'/>
            <Post message='jjkjkdjdj'/>


        </div>
    </div>

}

export default MyPosts;