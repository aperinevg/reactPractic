import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
     return (<nav className={classes.navbar}>
        <div>
            <NavLink to='/profile' activeClassName={classes.active} >Profile</NavLink>
        </div>
        <div>
            <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div>
            <NavLink to='' >News</NavLink>
        </div>
        <div>
            <NavLink to='' >Music</NavLink>
        </div>
        <div>
            <NavLink to='' >Settings</NavLink>
        </div>
    </nav>);
}

export default Navbar;