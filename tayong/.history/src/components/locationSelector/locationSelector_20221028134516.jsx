import React, { useState } from 'react';
import styles from './locationSelector.module.css';

function LocationSelector(props) {
  const [departure, setDeparture] = useState('');

  return (
    <div className={styles.locationSelector}>
      <div className={styles.departure}>
        <div>
          <label htmlFor='departure'><span>"출발지"</span>를 입력해 주세요</label>
        </div>
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
    </div>
  );
}

export default LocationSelector;