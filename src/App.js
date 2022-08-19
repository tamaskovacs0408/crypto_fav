import { useState } from 'react';
import Buttons from './Components/Buttons/Buttons';
import {COIN_API} from './api';
import './App.css';

function App() {

  const [coinData, setCoinData] = useState(null);

  const handleClick = (event) => {
  const coinId = event.target.value; 

  fetch(`${COIN_API}${coinId}`)
  .then(response => response.json())
  .then(data => setCoinData(data.quotes.USD.price))
  .catch((err) => console.log(err))

  }

  return (
    <div className="App">
      <Buttons handleClick={handleClick}/>
      <h1>{coinData}</h1>
    </div>
  );
}

export default App;
