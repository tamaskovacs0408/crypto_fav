import React from 'react';
import AVAXLogo from './avax.png';

const Avalanche = (props) => {
  return (
    <div>
      <img src={AVAXLogo} alt="Avalanche logo" />
      <button value={'avax-avalanche'} onClick={props.handleClick}>
        AVAX
      </button>
    </div>
  );
}

export default Avalanche;
