import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';


const DialogItem = (props: any) => {
    let path = '/dialogs/1' + props.id
    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}> {props.name}</NavLink>
</div>
}

const  Message = (props: any) => {
   return  <div className={s.dialogs}>{props.message}</div>
}

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Roman' id='1'/>
                <DialogItem name='Roman' id='2'/>
                <DialogItem name='Roman' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='jr'/>
                <Message message='kk'/>
                <Message message='hh'/>
            </div>
        </div>
    )
}


export default Dialogs;