import React from 'react';
import MyPosts from './Posts/MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
     return (<div className={classes.content}>
        <div>
            <img className={classes.contentFoto} src="https://focus.ua/storage/pub/images/2017/2615387.jpg" alt="" /></div>
            <div>Avatar + description</div>
            <MyPosts/>        
        </div>);
 
}

export default Profile;