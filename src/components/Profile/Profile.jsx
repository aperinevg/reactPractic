import React from 'react';
import MyPosts from './Posts/MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
     return (
        <div>
       
            <ProfileInfo/>
            <MyPosts/>        
        </div>);
 
}

export default Profile;