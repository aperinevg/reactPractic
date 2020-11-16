import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {addPost, updatePostText} from './redux/redux';

const rerenderEntairTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state ={state} addPost = {addPost} updatePostText={updatePostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );


};


rerenderEntairTree(state);
subscribe(rerenderEntairTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
