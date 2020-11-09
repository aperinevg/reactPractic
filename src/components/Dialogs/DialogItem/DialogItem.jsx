import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css'



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
                <NavLink to={path} className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>{props.name}</span>
                </NavLink>
    )
}

export default DialogItem;