import React, { useState } from 'react';
import styles from './locationSelector.module.css';

import { FaArrowRight } from 'react-icons/fa';

import Departure from '../departure/departure';
import Arrival from '../arrival/arrival';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function LocationSelector(props) {

  const navigate = useNavigate();
  
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');


  const departureHandler = (departure) => {
    setDeparture(departure);
  };

  const arrivalHandler = (arrival) => {
    setArrival(arrival);
  };

  return (
    <div className={styles.locationSelector}>
      <div className={styles.location}>
        <Departure departure={departure} onSet={departureHandler}/>
        <FaArrowRight className={styles.arrow}/>
        <Arrival arrival = {arrival} onSet={arrivalHandler}/>
      </div>
      <div>
        <button 
          className={styles.submitBtn}
          onClick={() => {navigate(`/list/${departure}/${arrival}`);}}
            >
          같이 이동할 사람 찾기
        </button>
      </div>
    </div>
  );
  
}

export default LocationSelector;