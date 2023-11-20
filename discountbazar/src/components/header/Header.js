import React from 'react';
import { BsCart2 } from "react-icons/bs";
import Search from '../Search/Search';
import HeaderStyle from './Styles/Header.module.css'


const Header = () => {
  return (
    <header className={`${HeaderStyle.header_container}`}>
        <div className={`${HeaderStyle.header_name}`}>
            <h3 className={`${HeaderStyle.header_logo}`}>Discount Bazar</h3>
        </div>
        <div>
            <Search/>
        </div>
          <div className={`${HeaderStyle.header_badge}`} >
             <BsCart2 className={`${HeaderStyle.header_icon}`} />
            <span className={`${HeaderStyle.badge_count}`}>5</span>
          </div>
    </header>
  )
}

export default Header