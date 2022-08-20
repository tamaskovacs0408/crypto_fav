import React from 'react';



export default function CoinPrices({data}) {
  return (
    <div className='price_container'>
      <h1>Current price</h1>
      <h2 key={data.symbol}>{parseFloat(data.lastPrice).toFixed(2)} $</h2>
    </div>
  )
}
