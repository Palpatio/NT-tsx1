import React from 'react';
import s from './Users.module.css'
import {UsersPageType, UsersType,} from "../../types/types";
import axios from 'axios';
import userPhoto from '../../assets/images/Avatarka.png'

type UsersPropsType = {
    usersPageType: UsersPageType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}

class UsersClassComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        debugger
        axios.get<UsersPageType>("https://social-network.samuraijs.com/api/1.0//users")
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)

            });
    }

    render() {
        return (
            <div>
                {this.props.usersPageType.items.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.usersPhoto}/></div>
                    <div>{u.followed
                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>}</div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>)}
            </div>
        )
    }
}

export default UsersClassComponent;