import React from 'react';
import SOLLogo from './sol.png';

export default function Solana(props) {
  return (
    <div className='crypto'>
      <img src={SOLLogo} alt="Solana logo" />
      <button className='btn-56' value={'SOLUSDT'} onClick={props.handleClick}>
        Solana
      </button>
    </div>
  )
}
