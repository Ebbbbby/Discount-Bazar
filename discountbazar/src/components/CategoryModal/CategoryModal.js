import React, { useState } from 'react'
import {storeData} from '../../Assets/data/dummyData'
import CategoryModalStyle from '../CategoryModal/style/CategoryModalStyle.module.css'

const CategoryModal = () => {
  const mapped = storeData.map((item) => item.type);
  const uniqueCategory = new Set(mapped)
  const uniqueNamesArray = Array.from(uniqueCategory);

  return (
   <div className={`${CategoryModalStyle.category.wrapper}`}>
      <div className={`${CategoryModalStyle.category_container}`}>
        {uniqueNamesArray.map((item,index) => (
          <div className={`${CategoryModalStyle.category_body}`}>
            <p key={index} className={`${CategoryModalStyle.category_text}`}>{item}</p>
          </div>
        ))}

    </div>
   </div>
  )
}

export default CategoryModal