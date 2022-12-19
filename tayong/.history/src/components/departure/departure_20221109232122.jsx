import React, { useState } from 'react';
import styles from './departure.module.css';

import { FaSearch } from 'react-icons/fa';
import { useEffect } from 'react';
function Departure({onSet, location}) {

  const [inputStr, setInputStr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const autoComplete = (e) => {
    setInputStr(e.target.innerText);
  }

  const relLocationHandler = () => {

  }

  useEffect(() => {
    console.log('시험중입니다');
    console.log({location});
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.departure}>
        <div className={styles.info}><span className={styles.ocos}>"</span><span>출발지</span><span className={styles.ocos}>"</span>를 입력해 주세요</div>
        
        <label htmlFor='departure'></label>
        <div className={styles.inputBox}>
          <input
              className={styles.input}
              type="text"
              id='departure'
              name='departure'
              value = {inputStr}
              onChange = {
                (e) => {
                  setInputStr(e.target.value);
                  onSet(e.target.value); // send departure data to locationSelector
                }
              }
          />
          <FaSearch className={styles.searchIcon}/>
        </div>

        <div className={styles.searchDropDown}>
              {/* <ul>
                {location.filter((loc) => {
                  if(inputStr == ""){return}
                  else if(loc.name.includes(inputStr)){
                    return loc
                  }
                })
                .map((loc) => {
                  return <li><button>{loc.name}</button></li>
                })
                }
              </ul> */}
        </div>

      </div>      
    </form>
  );
}

export default Departure;