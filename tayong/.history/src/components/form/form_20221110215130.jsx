import React from 'react';
import styles from './form.module.css';
import { FaSearch } from 'react-icons/fa';
import { FiCalendar} from 'react-icons/fi';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Departure from '../departure/departure';

function Form(props) {
  const navigate = useNavigate();

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const [recruitment, setRecruitment] = useState("");
  const [transport, setTransport] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if(departure == "" || arrival == "" || remainingTime == "" || recruitment == "" || transport == "" || title == "" || content == ""){
      console.warn('입력되지 않은 항목이 있습니다.');
      window.alert('입력되지 않은 항목이 있습니다.');
      return
    }

    let data = {
      departure: departure,
      arrival: arrival,
      remainingTime: remainingTime,
      recruitment: recruitment,
      transport: transport,
      title: title,
      content: content
    }

    console.log(data);

    axios
    .post("url", data)
    .then(
      console.log("데이터 전송이 완료되었습니다🎉"),
      (res) => console.log(res)
      );
    
    navigate('/'); // 메인 페이지로 이동 -> 나중에 상세 페이지 이동으로 바꾸면 좋을 듯
  }

  const backToListHandler = (e) => {
    navigate(-1);
  }
  
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.locationContainer}>
          <div className={styles.departure}>
            <label htmlFor='departure'>출발지</label>
            <Departure/>
            {/* <input type="text" id='departure' name='departure' maxLength='10' onChange={(e) => {setDeparture(e.target.value)}}/> */}
            <FaSearch className={styles.searchIcon}/>
          </div>
          <div className={styles.arrival}>
            <label htmlFor='arrival'>도착지</label>
            <input type="text" id='arrival' name='arrival' maxLength='10' onChange={(e) => {setArrival(e.target.value)}}/>
            <FaSearch className={styles.searchIcon}/>
          </div>
        </div>
        <div className={styles.infoContainer}>

          <div className={styles.remainingTime}>
            <label htmlFor='remainingTime'>마감시간</label>
            <input type="text" id='remainingTime' name='remainingTime' onChange={(e) => {setRemainingTime(e.target.value)}}/>
            <FiCalendar className={styles.calendarIcon}/>
          </div>
          
          <div className={styles.recruitment}>
            <label htmlFor='recruitment'>모집인원</label>
            <input type="text" id='recruitment' name='recruitment' maxLength='1' onChange={(e) => {setRecruitment(e.target.value)}}/>
            <p>명</p>
          </div>

          <div className={styles.transport}>
            <label htmlFor='transport'>이동수단</label>
            <select className={styles.transportSelect} onChange={(e) => {setTransport(e.target.value)}}>
              <option>선택</option>
              <option>택시</option>
              <option>자가용</option>
            </select>
          </div>

        </div>

        <div className={styles.title}>
          <label htmlFor='title'>제목</label>
          <input type="text" id='title' name='title' onChange={(e) => {setTitle(e.target.value)}}/>
        </div>
        
        <div className={styles.content}>
          <label htmlFor='content'>내용</label>
          <textarea cols="88" rows="6" maxLength="300" name='content' onChange={(e) => {setContent(e.target.value)}}></textarea>
        </div>
      </form>

      <div className={styles.btns}>
          <button className={styles.btn_backToList} type='button' onClick={backToListHandler}>목록으로</button>
          <button className={styles.btn_submit} onClick={submitHandler}>등록하기</button>
      </div>

    </div>
  );
}

export default Form;