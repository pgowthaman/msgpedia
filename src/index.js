import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Body/Body';
import CompanyCarousel from './Carousel/CompanyCarousel';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Header />
  <Body />
  <CompanyCarousel />
  <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
