import React from 'react';



export default function CoinPrices({data}) {
  return (
    <div className='price_container'>
      <h2>{parseFloat(data.lastPrice).toFixed(2)} <span>$</span></h2>
    </div>
  )
}
