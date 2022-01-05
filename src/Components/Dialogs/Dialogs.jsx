import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id}/>)

    let messagesElements = state.messages.map(m => <Message text={m.message} key = {m.id} id={m.id}/>)


    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit = {addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs


