import React, { useEffect } from 'react';
import { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import styles from './meetList.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';


function MeetList(props) {

  const [meetList, setMeetList] = useState([]);
  let param = useParams();
  // console.log(param['*']);
  const depLoc = param['*'].split('/')[0];
  const arrLoc = param['*'].split('/')[1]
  console.log(param['*'].split('/'));

  useEffect(() => {
    fetch('data/meet.json')
    .then(res => res.json())
    .then(data => {
      console.log('데이터를 잘 받아왔습니다.');
      setMeetList(data);
    });
  }, [])
  
  return (
    <div className={styles.meetList}>
      <div className={styles.location}>
        <div className={styles.locationDeparture}>
          <label htmlFor='departure'>출발</label>
          <input readOnly={true}
              type="text"
              id='departure'
              name='departure'
              value = {depLoc}
          />
        </div>
      <FaArrowRight className={styles.locationArrow}/>
      <div className={styles.locationArrival}>
        <label htmlFor='arrival'>도착</label>
          <input
              readOnly='true'
              type="text"
              id='arrival'
              name='arrival'
              value = {arrLoc}
          />    
        </div>    
      </div>
      <ul className={styles.list}>
        {meetList.map((item) => {
          if(item.departure == depLoc){
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
          }
        })}
      </ul>
    </div>
  );
}

export default MeetList;