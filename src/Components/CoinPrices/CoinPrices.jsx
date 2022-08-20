import React from 'react'

export default function CoinPrices({data}) {
  return (
    <div>
      <h1>{data.symbol}</h1>
      <h2>{data.lastPrice}</h2>
      <h3>{data.priceChangePercent}</h3>
    </div>
  )
}
