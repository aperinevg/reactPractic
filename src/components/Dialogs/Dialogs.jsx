import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
                <NavLink to={path} className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>{props.name}</span>
                </NavLink>
    )
}

const Message = (props)=>{
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Misha'},
        {id: '3', name: 'Alena'},
        {id: '4', name: 'Natasha'},
        {id: '5', name: 'Valera'},
        {id: '6', name: 'Sasha'},        
    ];
    let messageData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Yo'},
        {id: '3', message: 'How are you?'}     
    ];
    let dialogs = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = messageData.map(elem =>  <Message message={elem.message} />);

     return (
        <div className={classes.dialogs}>
            <div className={classes.members}>
                {dialogs}                              
            </div>
            <div className={classes.dialog}>
               {messages}
            </div>
        </div>

     )
}
export default Dialogs;