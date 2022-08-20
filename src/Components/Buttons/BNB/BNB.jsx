import React from 'react';
import BNBLogo from './bnb.png';

export default function BNB(props) {
  return (
    <div>
      <img src={BNBLogo} alt="BNB logo" />
      <button onClick={props.handleClick} value={'BNBUSDT'}>
        BNB
      </button>
    </div>
  )
}
