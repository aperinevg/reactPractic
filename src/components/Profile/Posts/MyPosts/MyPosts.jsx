import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    let postData = [
        {id:'1', message: 'This is my first post'},
        {id:'2', message: 'Hello, how are you?'}
    ]
     return (<div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <Post message={postData[0].message} />
                    <Post message={postData[1].message} />
                </div>  
            </div>             
        );
 
}

export default MyPosts;