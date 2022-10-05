import React from "react";
import './DropdownList.css'


function DropdownList(props) {

    const { dropdownListItems, dropdownActive, dropdownTriggerHandler, setSelectedValue } = props;


    const selectedValueHandler = (e) => {
        setSelectedValue(e.target.value);
    }

    return (
        <div className={`${"dropdownlist-item-container"} ${dropdownActive ? 'dropdown-active' : 'dropdown-inactive'}`} onClick={dropdownTriggerHandler}>
            {dropdownListItems.map((items) => (<button value={items} className='dropdownList-Item' onClick={selectedValueHandler}>{items}</button>))}
        </div>
    );
}

export default DropdownList;