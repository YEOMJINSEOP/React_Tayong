import React, { useState } from 'react';
import styles from './locationSelector.module.css';

import { AiOutlineArrowRight } from 'react-icons/fa';

import Departure from '../departure/departure';
import Arrival from '../arrival/arrival';

library.add(faArrowRight,faMagnifyingGlass);

function LocationSelector(props) {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const handleSetDeparture = (departure) => {
    setDeparture(departure);
  }

  const handleSetArrival = (arrival) => {
    setArrival(arrival);
  };

  return (
    <div className={styles.locationSelector}>
      <div className={styles.location}>
        <Departure departure={departure} onSet={handleSetDeparture} />
        <AiOutlineArrowRight className={styles.arrow}/>
        <Arrival arrival = {arrival} onSet={handleSetArrival}/>
      </div>
      <button className={styles.submitBtn}>같이 이동할 사람 찾기</button>
    </div>
  );
}

export default LocationSelector;