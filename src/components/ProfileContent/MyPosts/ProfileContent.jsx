import React from "react";
import x from './ProfileContent.module.css';
console.log(x);
const ProfileContent = () => {
    return (
        <div className={x.content}>
            <img src="http://www.selanakrasu32.com/wp-content/uploads/2017/01/ljubljana_1900x600.jpg"></img>
            <div>ava + description</div>
            <div>My posts</div>
            <div>New posts</div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>

        

    )

}

export default ProfileContent