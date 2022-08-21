import React from 'react';
import DOTLogo from './dot.png';

const Polkadot = (props) => {
  return (
    <div className='crypto'>
      <img src={DOTLogo} alt="Polkadot logo" />
      <button value={'DOTUSDT'} onClick={props.handleClick}>
        Polkadot
      </button>
    </div>
  );
}

export default Polkadot;
