import React from "react";
import s from './Header.module.css';

const Header = () => {
   return (
       <header className={s.header}>
           <img src='https://avatars.mds.yandex.net/get-pdb/1608858/18933751-96d4-4980-908e-720282d80cb2/s375' alt='logo'></img>
       </header>
   ) 
};

export default Header;