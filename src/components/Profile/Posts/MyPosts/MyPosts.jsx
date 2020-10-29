import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
     return (<div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <Post/>
                    <Post/>
                </div>  
            </div>             
        );
 
}

export default MyPosts;