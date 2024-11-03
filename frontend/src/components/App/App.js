import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import { light, dark } from '../../classes/Mode';
import React, { useEffect, useState } from 'react';


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
    <>
      <Nav mode={mode} change={() => {setDark(!isDark)}} />
      <Main mode={mode}/>
      
    </>
  );
}

export default App;