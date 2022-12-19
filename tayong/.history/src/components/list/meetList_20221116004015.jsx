import React, { useEffect } from 'react';
import { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import styles from './meetList.module.css';
import { FaArrowRight } from 'react-icons/fa';
import {useNavigate, useParams } from 'react-router-dom';
import Meet from '../\bmeet/meet';


function MeetList(props) {

  const navigate = useNavigate();

  const [meetList, setMeetList] = useState([]);
  let param = useParams();
  // console.log(param['*']);
  const depLoc = param['*'].split('/')[0];
  const arrLoc = param['*'].split('/')[1]
  console.log(param['*'].split('/'));

  const onClickHandler = (e) => {
    console.log('you clicked meet!😎');
    navigate('/detail');
  }

  useEffect(() => {
    fetch('data/meet.json')
    .then(res => res.json())
    .then(data => {
      console.log('모임 데이터를 받아왔습니다🥕');
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
              readOnly={true}
              type="text"
              id='arrival'
              name='arrival'
              value = {arrLoc}
          />    
        </div>    
      </div>
      <button className={styles.btn_create} onClick={(e) => {
        navigate('/create');
      }}>모집하기</button>
      <ul className={styles.list}>
        {meetList.map((item) => {
          if(item.departure === depLoc && item.arrival === arrLoc){
            return (
              <Meet
                key = {item.id}
                id={item.id}
                departure={item.departure}
                arrival={item.arrival}
                recruitment={item.recruitment}
                remainingTime={item.remainingTime}
                transport={item.transport}
                onClick={onClickHandler}
               />
              ) 
          }
        })}
      </ul>
    </div>
  );
}

export default MeetList;