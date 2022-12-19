import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './meet.module.css';

const imgTransport = 'https://img.freepik.com/free-photo/man-driving-car-from-rear-view_1359-494.jpg?w=1800&t=st=1667398765~exp=1667399365~hmac=8304fbbb3ab8792ecbc4535a7e8d5241ae499a2c44d4922f5de295d8b8df3d8f';
const imgTaxi = 'https://img.freepik.com/free-photo/taxi-sign-roof-top-car_74190-1728.jpg?w=1800&t=st=1667398413~exp=1667399013~hmac=efcccc4afa78711c2ff1407418bf496be6c0ddf73fe37c1c3ecf06f936d5bc24'; 

function Meet({id, userId, departure, arrival, recruitment, remainingTime, transport}) {

  const navigate = useNavigate();

  const selectImg = () => {
    if(transport == '자가용'){
      return imgTransport;
    } else{
      return imgTaxi;
    }
  }

  const onClickHandler = (e) => {
    console.log('Meet Click 🥕');
    navigate(`/detail/userId?=${userId}/departure?=${departure}/arrival?=${arrival}/transport?=${transport}/id?=${id}`);
    return <Detail/>
  }

  return (
  <li className={styles.meet} onClick={onClickHandler}>
    <div className={styles.infoImage}>
      <img 
      src= {selectImg()}
      alt="transport img" 
      />
    </div>
    <div className={styles.infoLocation}>
      <div className={styles.infoDeparture}>
        <p>출발</p>
      {departure}
      </div> 
      <FaArrowRight className={styles.arrow}/>
      <div className={styles.infoArrival}>
        <p>도착</p>
        {arrival}
      </div>
    </div>
    <div className={styles.infoSet}>
      <div className={styles.infoRecruitment}>
        <p>모집인원</p>
      {recruitment}
      </div>
      <div className={styles.infoTime}>
        <p>마감시간</p>
        {remainingTime}
      </div>
    </div>
  </li>
  );
}

export default Meet;