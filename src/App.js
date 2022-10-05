
import { useState } from 'react';
import './App.css';
import DropdownList from './DropdownList';

function App() {

  const dropdownListItems = ['Yes', 'Probably Not'];

  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownTriggerHandler = () => {
    setDropdownActive(!dropdownActive)
  };

  const [selectedValue, setSelectedValue] = useState('Select Options');


  return (
    <div className="App">
      <div className='drop-down'>
        <div className='drop-down-header' onClick={dropdownTriggerHandler}>
          {selectedValue}
          {!dropdownActive && <i class=" fa fa-light fa-angle-down"></i>}
          {dropdownActive && <i class=" fa fa-light fa-angle-up"></i>}
        </div>
        <DropdownList
          dropdownListItems={dropdownListItems}
          dropdownActive={dropdownActive}
          dropdownTriggerHandler={dropdownTriggerHandler}
          setSelectedValue={setSelectedValue}
        />
      </div>
    </div>
  );
}

export default App;
