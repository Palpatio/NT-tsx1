import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import s from './Profile.module.css'

// type PropsType = {
//     profilePage: ProfilePageType
//     dispatch: (action: ActionsType) => void


const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;