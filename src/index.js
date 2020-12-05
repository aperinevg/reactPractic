import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';




const rerenderEntairTree = (state) => {
  
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <React.StrictMode>
        <App  />
      </React.StrictMode>
    </StoreContext.Provider>,
    document.getElementById('root')
  );


};


rerenderEntairTree(store.getState());
store.subscribe(()=>{
  rerenderEntairTree(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
