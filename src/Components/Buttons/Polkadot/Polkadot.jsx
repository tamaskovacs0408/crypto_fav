import React from 'react';
import DOTLogo from './dot.png';

const Polkadot = (props) => {
  return (
    <div>
      <img src={DOTLogo} alt="Polkadot logo" />
      <button value={'dot-polkadot'} onClick={props.handleClick}>
        Polkadot
      </button>
    </div>
  );
}

export default Polkadot;
