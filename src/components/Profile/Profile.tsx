import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redax/state";
import { ActionsType } from "../../redax/dispatchTypes";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void

}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}


            />
        </div>
    )
}

export default Profile;