// import { useState } from 'react';
import Buttons from './Components/Buttons/Buttons';
import './App.css';

function App() {
  const handleClick = (event) => {
  const coinId = event.target.value; 
    console.log(coinId)
  }

  return (
    <div className="App">
      <Buttons handleClick={handleClick}/>
    </div>
  );
}

export default App;
