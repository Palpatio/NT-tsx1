import React from "react";
import s from './users.module.css';
import {UsersPageType, UsersType} from "../../types/types";
import axios from "axios";
import userPhoto from '../../assets/images/Avatarka.png'


type UsersPropsType = {
    usersPage: UsersPageType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void

}

function Users(props: UsersPropsType) {
    const getUsers = () => {
        if (props.usersPage.items.length === 0) {
            axios.get<UsersPageType>("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.usersPage.items.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                              className={s.usersPhoto}/></div>
                    <div>{u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;