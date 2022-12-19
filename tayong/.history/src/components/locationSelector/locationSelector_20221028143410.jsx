import React, { useState } from 'react';
import styles from './locationSelector.module.css';

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
        </div>
        <div className={styles.arrival}>
            <div className={styles.info}><span>"도착지"</span>를 입력해 주세요</div>
            <label htmlFor='arrival'></label>
            <input 
            id='arrival'
            name='arrival'
            value={arrival}
            type="text"
            onChange={
              (e) => {
                setArrival(e.target.value);
              }
            } />
        </div>
      </div>
        <button className={styles.submitBtn}>같이 이동할 사람 찾기</button>
    </form>
  );
}

export default LocationSelector;