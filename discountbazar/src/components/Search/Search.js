import React from 'react'
import { FiSearch } from "react-icons/fi";
import SearchStyle from '../Search/Search.module.css'


const Search = () => {
    return (
        <div className={`${SearchStyle.search_text}`}>
            <input type="text" placeholder='Search category, company name' className={`${SearchStyle.search_input}`}/>
            <div className={`${SearchStyle.search_icon}`}><FiSearch className={`${SearchStyle.icon}`} /></div>
        </div>
    )
}

export default Search