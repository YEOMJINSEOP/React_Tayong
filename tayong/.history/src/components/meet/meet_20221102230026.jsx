import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from './meet.module.css';
import '../../image';

function Meet(props) {

  return (
  <li className={styles.meet} key={props.id}>
    <div className={styles.infoImage}>
      <img src='../../../public/image/taxi' alt="transport img" />
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