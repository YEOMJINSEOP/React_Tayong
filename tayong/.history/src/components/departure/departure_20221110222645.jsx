import React, { useState } from 'react';
import styles from './departure.module.css';

import { FaSearch } from 'react-icons/fa';
import { useEffect } from 'react';
function Departure({onSet, position}) {

  const [location, setLocation] = useState([]);
  const [inputStr, setInputStr] = useState('');

  useEffect(() => {
    fetch('data/location.json')
    .then(res => res.json())
    .then(data => {
      console.log("위치 데이터를 받아왔습니다🥕")
      setLocation(data);
      console.log(data);
    })
  }, []);

  const autoComplete = (e) => {
    setInputStr(e.target.innerText);
    onSet(e.target.innerText);
    e.target.parentNode.style.visibility = 'hidden';
  }

  const positionOnMain = (position) => {
    if(position == 'main'){
      console.log("main!", position);
      return true;
    }
    else{
      console.log("not main", position);
      return false;
    }
  }


  return (

      <div className={styles.departure}>
        <div className={positionOnMain({position})? styles.inputBox : styles.formInputBox}>
          <input
              className={styles.input}
              type="text"
              id='departure'
              name='departure'
              maxLength='10'
              value = {inputStr}
              onChange = {
                (e) => {
                  setInputStr(e.target.value);
                }
              }
          />
          <FaSearch className={styles.searchIcon}/>
        </div>

        <div className={styles.searchDropDown}>
              <ul>
                {location.filter((loc) => {
                  if(inputStr == ""){return}
                  else if(loc.name.includes(inputStr)){
                    return loc
                  }
                })
                .map(
                  (loc) => {
                    return <li key={loc.id}><button onClick={autoComplete}>{loc.name}</button></li>
                  }
                )
                }
              </ul>
        </div>
      </div>      
  );
}

export default Departure;