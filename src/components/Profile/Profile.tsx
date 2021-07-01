import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redax/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost:(m:string)=>void
    changeNewText: (n: string) => void
    messageForNewPost: string


}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     changeNewText={props.changeNewText}
                     messageForNewPost={props.profilePage.messageForNewPost}
            />
        </div>
    )
}

export default Profile;