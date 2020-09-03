import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";
import bucket from "../../images/bucket.png";
import attach from "../../images/attach.png"
import avatarExample from "../../images/dialogs/avatars/male1.jpg"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;
    // let yourMessage = state.messages
    let newMessageBody = state.newMessageBody;
    let onSendMessageCLick = () => {
        props.store.dispatch(sendMessageCreator());

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));

    }


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = state.messages.map(m => <Message yourMessages={m.yourMessages}
                                                                  otherMessages={m.otherMessages}/>)

    return (
        <div>
            <div className={s.chat_container}>
                <div className={s.search_container}>
                    <input type='text' placeholder='Search'/>
                </div>
                <div className={s.conversation_list}>
                    {dialogsElements}
                </div>
                <div className={s.new_message_container}>
                    <NavLink to='#'>+</NavLink>
                </div>
                <div className={s.chat_title}>
                    <span>Liam Montgomery</span>
                    <img src={bucket} alt='delete conversation'/>
                </div>
                <div className={s.chat_message_list}>
                    {messagesElements}
                    {/*{props.yourMessages}*/}
                    <div className={s.message_row}>
                        <div className={s.message_you}>
                            <div className={s.message_content}>
                                <div className={s.message_text}>
                                    Ok then
                                </div>
                                <div className={s.message_time}>
                                    Apr 16
                                </div>
                                <div/>
                            </div>
                        </div>
                        <div className={s.message_row}>
                            <div className={s.message_other}>
                                <div className={s.message_content}>
                                    <img src={avatarExample} alt="avatar" align="middle"/>
                                    <div className={s.message_text}>
                                        So?
                                    </div>
                                    <div className={s.message_time}>
                                        Apr 16
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.chat_form}>

                    <img src={attach} alt='add attachment'/>
                    <input type='text' value={newMessageBody}
                           onChange={onNewMessageChange}
                           placeholder='type a message'/>

                </div>
                <div className={s.send_message}>
                    <button onClick={onSendMessageCLick}> send </button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs