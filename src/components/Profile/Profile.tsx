import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redax/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    changeNewText: (n: string) => void


}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     changeNewText={props.changeNewText}

            />
        </div>
    )
}

export default Profile;