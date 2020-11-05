import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    let postData = [
        {id:'1', message: 'This is my first post'},
        {id:'2', message: 'Hello, how are you?'}
    ];
    let posts = postData.map(post => <Post message={post.message} /> );
     return (<div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    {posts}
                    
                </div>  
            </div>             
        );
 
}

export default MyPosts;