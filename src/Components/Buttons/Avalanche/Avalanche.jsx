import React from 'react';
import AVAXLogo from './avax.png';

const Avalanche = (props) => {
  return (
    <div className='crypto'>
      <img src={AVAXLogo} alt="Avalanche logo" />
      <button className='btn btn_avax' value={'AVAXUSDT'} onClick={props.handleClick}>
        Avalanche
      </button>
    </div>
  );
}

export default Avalanche;
