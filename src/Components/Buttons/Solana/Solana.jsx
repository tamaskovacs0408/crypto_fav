import React from 'react';
import SOLLogo from './sol.png';

export default function Solana(props) {
  return (
    <div>
      <img src={SOLLogo} alt="Solana logo" />
      <button value={'sol-solana'} onClick={props.handleClick}>
        Solana
      </button>
    </div>
  )
}
