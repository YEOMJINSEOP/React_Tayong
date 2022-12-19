import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from './meet.module.css';

function Meet(props) {

  return (
  <li className={styles.meet} key={props.id}>
    <div className={styles.infoImage}>
      
      <img src='https://img.freepik.com/free-photo/elegant-uber-driver-giving-taxi-ride_23-2149241799.jpg?w=2000&t=st=1667397185~exp=1667397785~hmac=309d4f009857593786d3815fae1819a0db8096515d6afdde910e29139ac6f608' alt="transport img" />
    </div>
    <div className={styles.infoLocation}>
      <div className={styles.infoDeparture}>
        <p>출발</p>
      {props.departure}
      </div> 
      <FaArrowRight className={styles.arrow}/>
      <div className={styles.infoArrival}>
        <p>도착</p>
        {props.arrival}
      </div>
    </div>
    <div className={styles.infoSet}>
      <div className={styles.infoRecruitment}>
        <p>모집인원</p>
      {props.recruitment}
      </div>
      <div className={styles.infoTime}>
        <p>마감시간</p>{
        props.remainingTime}
      </div>
    </div>
  </li>
  );
}

export default Meet;