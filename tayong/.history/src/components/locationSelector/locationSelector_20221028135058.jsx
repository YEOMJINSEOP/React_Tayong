import React, { useState } from 'react';
import styles from './locationSelector.module.css';

function LocationSelector(props) {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  return (
    <form className={styles.locationSelector}>
        <label htmlFor='departure'><span>"출발지"</span>를 입력해 주세요</label>
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
        <label htmlFor='arrival'><span>"도착지"</span>를 입력해 주세요</label>
        <input 
        type="text"
        id='arrival'
        name='arrival'
        value={arrival}
        onChange={
          (e) => {
            setArrival(e.target.value);
          }
        } />
        <button>같이 이동할 사람 찾기</button>
    </form>
  );
}

export default LocationSelector;