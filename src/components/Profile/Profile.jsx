import React from 'react';
import MyPosts from './Posts/MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
     return (<div>
        <div>
            <img className={classes.contentFoto} src="https://lh3.googleusercontent.com/proxy/e_Y4g1eHYQ0Ymxu06jPAOtpr8D3WuLxdGLHj7fPvHCOYYMIihkf0MXkyW0lcbJFED8GuNkmUcoOO8O9h5Z8FB3g9-bTB-M5OFtHwmW1Yy9Y4M8JsRhLrq54mtgEBv7Ae" alt="" /></div>
            <div>Avatar + description</div>
            <MyPosts/>        
        </div>);
 
}

export default Profile;