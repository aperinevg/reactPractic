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
    ]
    let messageData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Yo'},
        {id: '3', message: 'How are you?'}     
    ]

     return (
        <div className={classes.dialogs}>
            <div className={classes.members}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                
            </div>
            <div className={classes.dialog}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />


            </div>
        </div>

     )
}
export default Dialogs;