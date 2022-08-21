import React from 'react';
import BTCLogo from './btc.png';

const Bitcoin = (props) => {
  return (
    <div className='crypto'>
      <img src={BTCLogo} alt="Bitcon logo" />
      <button className='btn-56' value={'BTCUSDT'} onClick={props.handleClick}>
        Bitcoin
      </button>
    </div>
  );
}

export default Bitcoin;
