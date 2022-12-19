import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MeetList from '../components/list/meetList';

function List(props) {
  return (
    <>
      <Header/>
      <MeetList/>
      <Footer/>
    </>
  );
}

export default List;