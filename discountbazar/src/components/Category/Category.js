import React from 'react'
import CategoryStyle from '../Category/Styles/Category.module.css'
import { FaChevronDown } from "react-icons/fa";
import CategoryModal from '../CategoryModal/CategoryModal';

const Category = ({showModal, setShowModal}) => {
  return (
    <>

          <div className={`${CategoryStyle.dropdownWrapper}`}>
      {/* {showModal && <CategoryModal />} */}
              <input
                  type="text"
                  placeholder="Category"
                  className={`${CategoryStyle.dropdownInput}`}
                  readOnly
              onClick={() => setShowModal(!showModal)}
              />
               <div className={`${CategoryStyle.dropdownIcon}`}>
                <FaChevronDown/>
              </div>


    </div>
    <div>
    { showModal && <CategoryModal /> }
    </div>
    </>

  )

}

export default Category