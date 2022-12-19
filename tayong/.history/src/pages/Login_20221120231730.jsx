import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import LoginForm from '../components/loginForm/loginForm';

function Login(props) {
  return (
    <>
      <Header/>
      <LoginForm/>
      <Footer/>
    </>
  );
}

export default Login;