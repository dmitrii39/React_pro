/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import fig from './Nav.module.css';



const Nav = () => {
return (
    
        <nav className={fig.navi}>
            <ul className={fig.list}>

            <li><a href="#" className="item">Profile</a></li>
            <li><a href="#" className="item">Massages</a></li>
            <li><a href="#" className="item">Content</a></li>
            <li><a href="#" className="item">Music</a></li>
                         
            </ul>
        </nav>
        
    
)

}

export default Nav