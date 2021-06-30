import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';
import {DialogType} from "../../../redax/state";


type PropsType={
    dialog:DialogType
}

const DialogItem = (props: PropsType) => {
    let path = '/dialogs/1' + props.dialog.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}> {props.dialog.name}</NavLink>
    </div>
}




export default DialogItem;