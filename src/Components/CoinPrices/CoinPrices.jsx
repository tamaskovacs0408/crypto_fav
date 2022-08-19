import React from 'react'

export default function CoinPrices(props) {
  return (
    <div>
      <h2>{props.coinName}</h2>
      <h3>{props.coinPrice}</h3>
    </div>
  )
}
