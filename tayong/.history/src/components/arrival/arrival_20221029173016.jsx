import React from 'react';
import styles from './arrival.module.css';

function Arrival(props) {
  return (
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
      <FontAwesomeIcon className={styles.searchIcon} icon="fa-solid fa-magnifying-glass" />
    </div>
  </div>
  );
}

export default Arrival;