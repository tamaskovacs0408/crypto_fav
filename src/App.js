import { useState, useEffect } from 'react';
import Buttons from './Components/Buttons/Buttons';
import CoinPrices from './Components/CoinPrices/CoinPrices';
import {COIN_API} from './api';
import axios from 'axios';
import uuid from 'react-uuid';
import './App.css';
//
function App() {
  const [coinData, setCoinData] = useState([]);
  const [coinId, setCoinId] = useState('');

  const handleClick = (event) => {
    setCoinId(event.target.value)
  }

  useEffect(() => {
    axios.get(`${COIN_API}`)
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err))
  }, [coinId]);

  return (
    <div className="App"> 
      <header>
        <h1>GET CURRENT PRICE</h1>
      </header>
      <Buttons handleClick={handleClick}/>
      <>
        {coinData
          .filter(coin => coin.symbol === coinId)
          .map(data => {
            return <CoinPrices 
              key={uuid()}
              data={data}/>
          }
            
        )}
      </>
    </div>
  );
}

export default App;
