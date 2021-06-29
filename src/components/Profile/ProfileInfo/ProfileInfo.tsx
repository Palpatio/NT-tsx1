import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = (props: any) => {
    return (
        <div>
            <div>
                <img src='https://union-travel.ru/assets/images/country/thailand/resorts/beach1.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}

export default ProfileInfo;