import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return <div className={s.conversationLinks}>
        <NavLink to={path}>
            <div className={s.conversation}>
                <img src={props.img} alt='avatar'/>
                <div className={s.title_text}>
                    {props.name}
                </div>
                <div className={s.created_date}>
                    Aug 16
                </div>
                <div className={s.conversation_message}>
                    This is a last message
                </div>
            </div>
        </NavLink>

    </div>
}

export default DialogItem