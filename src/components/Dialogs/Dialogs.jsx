import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = () => {
     return (
        <div className={classes.dialogs}>
            <div className={classes.members}>
                <NavLink to="/dialogs/1" className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>Alex</span>
                </NavLink>
                <NavLink to="/dialogs/2" className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>Alex</span>
                </NavLink>
                <NavLink to="/dialogs/2" className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>Alex</span>
                </NavLink>
                <NavLink to="/dialogs/3" className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>Alex</span>
                </NavLink>
                <NavLink to="/dialogs/4" className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>Alex</span>
                </NavLink>
             
                <NavLink to="/dialogs/5" className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>Alex</span>
                </NavLink>
                <NavLink to="/dialogs/5" className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>Alex</span>
                </NavLink>
                <NavLink to="/dialogs/5" className={classes.memberCard}>
                    <img className={classes.memberImg} src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" alt="" />
                    <span className={classes.memberName}>Alex</span>
                </NavLink>
            </div>
        <div className={classes.dialog}>

        </div>
        </div>

     )
}
export default Dialogs;