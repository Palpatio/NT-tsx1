import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://union-travel.ru/assets/images/country/thailand/resorts/beach1.jpg'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;