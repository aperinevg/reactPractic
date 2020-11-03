import React from 'react';
import MyPosts from './Posts/MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
     return (<div>
        <div>
            <img className={classes.contentFoto} src="" alt="" /></div>
            <div>Avatar + description</div>
            <MyPosts/>        
        </div>);
 
}

export default Profile;