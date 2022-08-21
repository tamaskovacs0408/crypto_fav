import React from 'react';
import DODGELogo from './doge.png';

export default function Dodge(props) {
  return (
    <div className='crypto'>
      <img src={DODGELogo} alt="Dogecoin logo" />
      <button className='btn-56' value={'DOGEUSDT'} onClick={props.handleClick}>
        Dogecoin
      </button>
    </div>
  )
}
