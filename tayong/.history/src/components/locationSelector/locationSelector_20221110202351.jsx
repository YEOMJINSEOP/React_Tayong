import React, { useState } from 'react';
import styles from './locationSelector.module.css';

import { FaArrowRight } from 'react-icons/fa';

import Departure from '../departure/departure';
import Arrival from '../arrival/arrival';
import { useNavigate } from 'react-router-dom';



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

  const submitHandler = () => {
    if(departure === ""){
      alert('지정된 출발지로 설정하세요');
      return
    }
    else if(arrival === ""){
      alert('지정된 도착지로 설정하세요');
      return
    }
    navigate(`/list/${departure}/${arrival}`);
  }

  return (
    <div className={styles.locationSelector}>
      <div className={styles.location}>
        <Departure departure={departure} onSet={departureHandler}/>
        <FaArrowRight className={styles.arrow}/>
        <Arrival arrival = {arrival} onSet={arrivalHandler}/>
      </div>
      <button 
        className={styles.submitBtn}
        onClick={submitHandler}
          >
        같이 이동할 사람 찾기
      </button>
    </div>
  );
  
}

export default LocationSelector;