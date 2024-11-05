import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import { light, dark } from '../../classes/Mode';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/signup';


function App() {
  const [mode, setMode] = useState(light);
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      setMode(dark);
      let x = document.getElementsByClassName('modeImg');
      for (let i = 0; i < x.length; i++) {
        x.item(i).style.transform = "translateX(0%)";
        x.item(i).style.filter = "none";
      }
    }
    else {
      setMode(light);
      let x = document.getElementsByClassName('modeImg');
      for (let i = 0; i < x.length; i++) {
        x.item(i).style.transform = "translateX(-100%)";
        x.item(i).style.filter = "invert()";
      }
    }
  }, [isDark]);
  return (
    <Router>
      <Nav mode={mode} change={() => { setDark(!isDark) }} />
      <Routes>
        <Route exact path='/' element={<Main mode={mode} />}></Route>
        <Route exact path='/login' element={<Login mode={mode} />}></Route>
        <Route exact path='/reg' element={<Signup mode={mode} />}></Route>

        {/* <Route exact path='/login' Component={Login}></Route> */}
        {/* <Route exact path='/reg' Component={Login}></Route> */}
      </Routes>
    </Router>

  );
}

export default App;