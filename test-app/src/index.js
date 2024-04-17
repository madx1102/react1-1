import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Library from './Library';
import Clock from './Clock';
import Welcome from './Welcome';
import CmtList from './CmtList';
import NotificationList from './NotificationList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello towhat = "world"/>
    <Library/>
    <Clock/>
    <Welcome name="인제"/>
    <Welcome name="샌즈"/>
    <Welcome name="뷁"/>
    <CmtList/>
    <NotificationList/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
