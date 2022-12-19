import React from 'react';
import styles from './departure.module.css';
function Departure(props) {
  return (
    <div className={styles.departure}>
          <div className={styles.info}><span>"출발지"</span>를 입력해 주세요</div>
          <label htmlFor='departure'></label>
          <div className={styles.inputBox}>
            <input
                className={styles.input}
                type="text"
                id='departure'
                name='departure'
                value = {props.departure}
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

export default Departure;