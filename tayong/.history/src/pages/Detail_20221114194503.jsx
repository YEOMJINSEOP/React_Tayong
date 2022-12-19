import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import meetDetail from '../components/meetDetail/meetDetail'

function Detail(props) {
  return (
    <>
      {/* <Header/> */}
      <meetDetail/>
      <Footer/>
    </>
  );
}

export default Detail;