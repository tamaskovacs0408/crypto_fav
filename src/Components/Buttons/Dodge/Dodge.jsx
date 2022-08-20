import React from 'react';
import DODGELogo from './doge.png';

export default function Dodge(props) {
  return (
    <div>
      <img src={DODGELogo} alt="Dogecoin logo" />
      <button value={'DOGEUSDT'} onClick={props.handleClick}>
        Dogecoin
      </button>
    </div>
  )
}
