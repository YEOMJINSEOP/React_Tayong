import React, { useState } from 'react';
import styles from './locationSelector.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faArrowRight,faMagnifyingGlass);


function LocationSelector(props) {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit = {handleSubmit} className={styles.locationSelector}>
      <div className={styles.location}>
        <div className={styles.departure}>
          <div className={styles.info}><span>"출발지"</span>를 입력해 주세요</div>
          <label htmlFor='departure'></label>
          <div className={styles.input}>
            <input
                type="text"
                id='departure'
                name='departure'
                value = {departure}
                onChange = {
                  (e) => {
                    setDeparture(e.target.value);
                  }
                }
            />
            <FontAwesomeIcon className={styles.searchIcon} icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right"/>
        </div>
        <div className={styles.arrival}>
            <div className={styles.info}><span>"도착지"</span>를 입력해 주세요</div>
            <label htmlFor='arrival'></label>
            <div className={styles.input}>
            <input
                type="text"
                id='departure'
                name='departure'
                value = {arrival}
                onChange = {
                  (e) => {
                    setDeparture(e.target.value);
                  }
                }
            />
            <FontAwesomeIcon className={styles.searchIcon} icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
        <button className={styles.submitBtn}>같이 이동할 사람 찾기</button>
    </form>
  );
}

export default LocationSelector;