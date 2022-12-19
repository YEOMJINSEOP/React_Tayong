import React from 'react';
import styles from './form.module.css';
import { FaSearch } from 'react-icons/fa';
import { FiCalendar} from 'react-icons/fi';

function Form(props) {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.locationContainer}>
          <div className={styles.departure}>
            <label htmlFor='departure'>출발지</label>
            <input type="text" id='departure' name='departure'/>
            <FaSearch className={styles.searchIcon}/>
          </div>
          <div className={styles.arrival}>
            <label htmlFor='arrival'>도착지</label>
            <input type="text" id='arrival' name='arrival'/>
            <FaSearch className={styles.searchIcon}/>
          </div>
        </div>
        <div className={styles.infoContainer}>

          <div className={styles.remainingTime}>
            <label htmlFor='remainingTime'>마감시간</label>
            <input type="text" id='remainingTime' name='remainingTime'/>
            <FiCalendar className={styles.calendarIcon}/>
          </div>
          
          <div className={styles.recruitment}>
            <label htmlFor='recruitment'>모집인원</label>
            <input type="text" id='recruitment' name='recruitment'/>
          </div>

          <div className={styles.transport}>
            <label htmlFor='transport'>이동수단</label>
            <select className={styles.transportSelect}>
              <option>택시</option>
              <option>자가용</option>
            </select>
          </div>

        </div>

        <div className={styles.title}>
          <label htmlFor='title'>제목</label>
          <input type="text" id='title' name='title'/>
        </div>
        
        <div className={styles.content}>
          <label htmlFor='content'>내용</label>
          <input type="text" id='content' name='content' />
        </div>

      </form>
    </div>
  );
}

export default Form;