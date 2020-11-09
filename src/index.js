import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
  {id:'1', message: 'This is my first post'},
  {id:'2', message: 'Hello, how are you?'}
]; 
let dialogsData = [
  {id: '1', name: 'Alex'},
  {id: '2', name: 'Misha'},
  {id: '3', name: 'Alena'},
  {id: '4', name: 'Natasha'},
  {id: '5', name: 'Valera'},
  {id: '6', name: 'Sasha'},        
];
let messageData = [
  {id: '1', message: 'Hi'},
  {id: '2', message: 'Yo'},
  {id: '3', message: 'How are you?'}     
];


ReactDOM.render(
  <React.StrictMode>
    <App postData = {postData} dialogsData={dialogsData} messageData={messageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
