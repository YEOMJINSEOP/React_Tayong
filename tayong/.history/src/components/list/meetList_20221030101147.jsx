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
          <li key={item.id}>
            <div className={styles.infoLocation}>
              <p className={styles.infoDeparture}><span>출발</span>{item.departure}</p> 
              <p><span>도착</span>{item.arrival}</p>
            </div>
            <div className={styles.infoSet}>
              {item.recruitment}, {item.remainingTime}
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default MeetList;