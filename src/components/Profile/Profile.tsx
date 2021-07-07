import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/store";
import { ActionsType } from "../../redux/dispatchTypes";

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