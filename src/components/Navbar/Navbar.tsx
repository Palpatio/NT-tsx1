import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'


function Navbar() {
    const PATH_STORE = {
        PROFILE: '/profile',
        DIALOGS: '/dialogs',
        NEWS: '/news',
        MUSIC: '/music',
        SETTINGS: '/settings',
        USERS: '/users'
    }

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH_STORE.PROFILE} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH_STORE.DIALOGS} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH_STORE.NEWS} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH_STORE.MUSIC} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH_STORE.SETTINGS} activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH_STORE.USERS} activeClassName={s.active}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;