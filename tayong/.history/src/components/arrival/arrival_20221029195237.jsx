import React from 'react';
import styles from './arrival.module.css';

import { FaSearch } from 'react-icons/fa';

function Arrival(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.arrival}>
        <div className={styles.info}><span>"도착지"</span>를 입력해 주세요</div>
          <label htmlFor='arrival'></label>
          <div className={styles.inputBox}>
            <input
                className={styles.input}
                type="text"
                id='arrival'
                name='arrival'
                value = {props.arrival}
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

export default Arrival;