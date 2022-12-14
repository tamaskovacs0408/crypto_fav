import React from 'react';
import BNBLogo from './bnb.png';

export default function BNB(props) {
  return (
    <div className='crypto'>
      <img src={BNBLogo} alt="BNB logo" />
      <button className='btn btn_bnb' onClick={props.handleClick} value={'BNBUSDT'}>
        BNB
      </button>
    </div>
  )
}
