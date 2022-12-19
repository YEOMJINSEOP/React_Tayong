import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MeetDetail from '../components/meetDetail/meetDetail'

function Detail(props) {
  return (
    <>
      <Header/>
      <MeetDetail/>
      <Footer/>
    </>
  );
}

export default Detail;