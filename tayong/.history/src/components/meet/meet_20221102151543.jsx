import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from './meet.module.css';

function Meet(props) {
  return (
  <li className={styles.meet} key={props.id}>
    <div className={styles.infoImage}></div>
    <div className={styles.infoLocation}>
      <p className={styles.infoDeparture}><span>출발</span>{props.departure}</p> 
      <FaArrowRight className={styles.arrow}/>
      <p><span>도착</span>{props.arrival}</p>
    </div>
    <div className={styles.infoSet}>
      <p className={styles.infoRecruitment}><span>모집인원</span>{props.recruitment}</p>
      <p className={styles.infoTime}><span>마감시간</span>{props.remainingTime}</p>
    </div>
  </li>
  );
}

export default Meet;