import React from 'react';
import styles from './departure.module.css';

import { FaSearch } from 'react-icons/fa';
function Departure(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.departure}>
        <div className={styles.info}><span className={styles.ocos}>"</span><span>출발지</span><span className={styles.ocos}>"</span>를 입력해 주세요</div>
        <div className={styles.inputBox}>
          <input
              className={styles.input}
              type="text"
              id='departure'
              name='departure'
              // value = {props.departure} 없어도 되는값이 아닌가..?
              onChange = {
                (e) => {
                  props.onSet(e.target.value);
                }
              }
          />
          <FaSearch className={styles.searchIcon}/>
        </div>
      </div>      
    </form>
  );
}

export default Departure;