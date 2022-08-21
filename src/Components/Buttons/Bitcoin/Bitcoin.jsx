import React from 'react';
import BTCLogo from './btc.png';

const Bitcoin = (props) => {
  return (
    <div className='crypto'>
      <img src={BTCLogo} alt="Bitcon logo" />
      <button value={'BTCUSDT'} onClick={props.handleClick}>
        Bitcoin
      </button>
    </div>
  );
}

export default Bitcoin;
