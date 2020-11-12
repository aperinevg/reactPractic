import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
     return (<div>
        
            <img className={classes.contentFoto} src="https://lifeandjoy.ru/uploads/posts/2019-06/medium/1560172567_01.jpg" alt="" />
            <div>Avatar + description</div>
                   
        </div>);
 
}

export default ProfileInfo;