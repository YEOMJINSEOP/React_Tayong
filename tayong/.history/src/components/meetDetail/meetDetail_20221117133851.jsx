import React, { useState } from 'react';
import styles from './meetDetail.module.css'
import { FiCalendar} from 'react-icons/fi';
import axios from 'axios';
import { useEffect } from 'react';

function MeetDetail(props) {

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const [recruitment, setRecruitment] = useState("");
  const [transport, setTransport] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const url = './meet.json';
  // axios.get(url)
  // .then(
  //   (res) => {
  //     console.log(res);
  //     console.log("데이터를 받아왔습니다🎉");
  //     // setDeparture(res.departure)
  //   }
  // );

  useEffect(() => {
    fetch('data/meetDetail.json')
    .then(res => res.json())
    .then(data => {
      console.log('모임 데이터를 받아왔습니다🥕');
      console.log(data);
      console.log(data.departure);
    });
  }, [])

  return (
    <div className={styles.container}>
        <img className={styles.imgTransport} src="https://img.freepik.com/free-photo/taxi-sign-roof-top-car_74190-1728.jpg?w=1800&t=st=1667398413~exp=1667399013~hmac=efcccc4afa78711c2ff1407418bf496be6c0ddf73fe37c1c3ecf06f936d5bc24" alt="transport image" />
        <div className={styles.locAndUserContainer}>
          <div className={styles.location}>
            <div className={styles.departure}>
              <label htmlFor='departure'>출발</label>
              <input type="text" id='departure' name='departure' value={departure} readOnly/>
            </div>
            <div className={styles.arrival}>
              <label htmlFor='arrival'>도착</label>
              <input type="text" id='arrival' name='arrival' readOnly/>
            </div>
          </div>
          <div className={styles.user}></div>
        </div>
        <input className={styles.title} type="text" id='title' name='title' readOnly/>
        <div className={styles.info}>
          <div className={styles.recruitment}>
            <label htmlFor='recruitment'>모집인원</label>
            <input type="text" id='recruitment' name='recruitment' readOnly/>
            <p>명</p>
          </div>
          <div className={styles.remainingTime}>
            <label htmlFor='remainingTime'>마감시간</label>
            <input type="text" id='remainingTime' name='remainingTime' readOnly/>
          </div>
        </div>

        <div className={styles.content}>
            <textarea cols="88" rows="6" maxLength="300" name='content' readOnly></textarea>
        </div>

        <div className={styles.btns}>
          <button className={styles.btn_join}>참여하기</button>
          <button className={styles.btn_chat}>채팅하기</button>
          <button className={styles.btn_backToList}>목록으로</button>
        </div>
    </div>
  );
}

export default MeetDetail;