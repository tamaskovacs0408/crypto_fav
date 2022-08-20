import { useState } from 'react';
import Buttons from './Components/Buttons/Buttons';
import CoinPrices from './Components/CoinPrices/CoinPrices';
import {COIN_API} from './api';
import axios from 'axios';
import './App.css';
//
function App() {
  const [coinData, setCoinData] = useState([]);

  const handleClick = (event) => {
    let coinId = event.target.value;
    console.log({coinId})

    const getData = async() => {
        await axios.get(`${COIN_API}`)
          .then(res => setCoinData((res.data).filter(coin => coin.symbol === coinId)))
          .catch(err => console.log(err))
      }
      getData()
  }

  return (
    <div className="App"> 
      <Buttons handleClick={handleClick}/>
      {coinData && <CoinPrices data={coinData[0]}/>}
    </div>
  );
}

export default App;


// const getData = async() => {
//   await axios.get(`${COIN_API}${coinId}`)
//     .then(res => setCoinName(res.data))
//     .catch(err => console.log(err))
// }
// getData()