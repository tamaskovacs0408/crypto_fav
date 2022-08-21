import React from 'react';
import AVAXLogo from './avax.png';

const Avalanche = (props) => {
  return (
    <div className='crypto'>
      <img src={AVAXLogo} alt="Avalanche logo" />
      <button className='btn-56' value={'AVAXUSDT'} onClick={props.handleClick}>
        AVAX
      </button>
    </div>
  );
}

export default Avalanche;
