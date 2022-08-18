import React from 'react';
import DODGELogo from './dodge.png';

export default function Dodge(props) {
  return (
    <div>
      <img src={DODGELogo} alt="Dodgecoin logo" />
      <button value={'doge-dogecoin'} onClick={props.handleClick}>
        Dodgecoin
      </button>
    </div>
  )
}
