import { useState, useEffect } from 'react';
import Buttons from './Components/Buttons/Buttons';
// import CoinPrices from './Components/CoinPrices/CoinPrices';
import {COIN_API} from './api';
import axios from 'axios';
import './App.css';
//
function App() {
  // const [coinId, setCoinId] = useState('');
  const [coinData, setCoinData] = useState([]);

  const handleClick = (event) => {
    let coinId = event.target.value;

    axios.get(`${COIN_API}${coinId}`)
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err))
  }
    

  return (
    <div className="App">
      <Buttons handleClick={handleClick}/>
      <div>
            <>
            <h2>{coinData.name}</h2>
            <h3>{coinData.rank}</h3>
            <h4>{(coinData.quotes.USD.price).toFixed(3)} $</h4>
            </>
      </div>
    </div>
  );
}

export default App;
