import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {

  

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navbar/>
        <div className="app-content">
          <Route path='/dialogs' render = { ()=> <Dialogs dialogsData={props.dialogsData} messageData={props.messageData} /> } />
          <Route path='/profile' render = { ()=>  <Profile postData={props.postData} /> } />
                 
        </div>
      
        
      </div>
    </BrowserRouter> 
  );
}

export default App;
