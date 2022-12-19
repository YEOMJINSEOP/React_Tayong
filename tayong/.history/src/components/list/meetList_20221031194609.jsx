import React, { useEffect } from 'react';
import { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import styles from './meetList.module.css';
import { FaArrowRight } from 'react-icons/fa';
import dummy from "../../data/meet.json";

function MeetList(props) {
  const [meetList, setMeetList] = useState([]);

  useEffect(() => {
    dummy.meet.map((item) => {
      console.log(dummy);
      console.log(item);
      setMeetList(...dummy.meet);
      // setMeetList(...dummy.meet, item);
    })
  }, [])

  return (
    <div className={styles.meetList}>
      <div className={styles.location}>
        <div className={styles.locationDeparture}>
          <label htmlFor='departure'>출발</label>
          <input
              type="text"
              id='departure'
              name='departure'
              value = '디지털미디어시티'
              onChange={() => {
                console.log('');
              }}
          />
        </div>
      <FaArrowRight className={styles.locationArrow}/>
      <div className={styles.locationArrival}>
        <label htmlFor='arrival'>도착</label>
          <input
              type="text"
              id='arrival'
              name='arrival'
              value = '한국항공대'
              onChange={() => {
                console.log('');
              }}
          />    
        </div>    
      </div>
      <ul className={styles.list}>
        {meetList.map((item) => {
          return (
          <li className={styles.meet} key={item.id}>
            <div className={styles.infoImage}></div>
            <div className={styles.infoLocation}>
              <p className={styles.infoDeparture}><span>출발</span>{item.departure}</p> 
              <FaArrowRight className={styles.arrow}/>
              <p><span>도착</span>{item.arrival}</p>
            </div>
            <div className={styles.infoSet}>
              <p className={styles.infoRecruitment}><span>모집인원</span>{item.recruitment}</p>
              <p className={styles.infoTime}><span>마감시간</span>{item.remainingTime}</p>
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default MeetList;