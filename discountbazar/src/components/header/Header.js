import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import Search from '../Search/Search';
import HeaderStyle from './Styles/Header.module.css'
import Category from '../Category/Category';


const Header = () => {
    const [showModal, setShowModal ] = useState(false)
    return (
        <header className={`${HeaderStyle.header_wrapper}`}>
            <div className={`${HeaderStyle.header_name}`}>
                <h3 className={`${HeaderStyle.header_logo}`}>Discount Bazar</h3>
                <div className={`${HeaderStyle.category_wrapper}`}>
                    <Category showModal={showModal} setShowModal={setShowModal} />
                </div>

            </div>

            <div className={`${HeaderStyle.header_container}`}>

                <div className={`${HeaderStyle.search_wrapper}`}>
                    <Search />
                </div>
                <div className={`${HeaderStyle.header_badge}`} >
                    <BsCart2 className={`${HeaderStyle.header_icon}`} />
                    <span className={`${HeaderStyle.badge_count}`}>5</span>
                </div>
            </div>



        </header>
    )
}

export default Header