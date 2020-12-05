import React from 'react';
import MyPosts from './Posts/MyPosts/MyPosts';
import MyPostsContainer from './Posts/MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    
     return (
        <div>
       
            <ProfileInfo/>
            <MyPostsContainer />
            {/* <MyPosts postData={props.state.postData}
                     dispatch= {props.dispatch}
                     newPostText = {props.state.newPostText}
                     
                     />         */}
        </div>);
 
}

export default Profile;