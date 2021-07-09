import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'

ReactDOM.render(
  <React.StrictMode>
   <Header /> 
  <Footer />
  <FloatingWhatsApp phone ={+919688504775} size="60px" autoOpenTimeout="20000"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
