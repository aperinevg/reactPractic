import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    
    let posts = props.postData.map(post => <Post message={post.message} /> );
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