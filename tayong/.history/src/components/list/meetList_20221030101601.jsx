import React from 'react';
import { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import styles from './meetList.module.css';

function MeetList(props) {
  const [meetList, setMeetList] = useState([
    { 'id': uuidV4(),
      'departure': '디지털미디어시티',
      'arrival': '한국항공대학교',
      'recruitment': '1/4',
      'remainingTime': '1시간 27분 남음'
    },
  ]);

  return (
    <div className={styles.meetList}>
      <ul>
        {meetList.map((item) => {
          console.log('hi');
          console.log(item);
          return (
          <li classList={styles.meet} key={item.id}>
            <div className={styles.infoLocation}>
              <p className={styles.infoDeparture}><span>출발</span>{item.departure}</p> 
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