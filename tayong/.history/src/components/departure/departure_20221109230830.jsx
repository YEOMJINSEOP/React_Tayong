import React, { useState } from 'react';
import styles from './departure.module.css';

import { FaSearch } from 'react-icons/fa';
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
              // value = {props.departure} 없어도 되는값이 아닌가..?
              onChange = {
                (e) => {
                  onSet(e.target.value);
                  setInputStr(e.target.value);
                }
              }
          />
          <FaSearch className={styles.searchIcon}/>
        </div>

        <div className={styles.searchDropDown}>
              <ul>

              </ul>
        </div>

      </div>      
    </form>
  );
}

export default Departure;