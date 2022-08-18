import React from 'react';
import SHIBALogo from './shiba.png'

const Shiba = (props) => {
  return (
    <div>
      <img src={SHIBALogo} alt="Shiba Inu logo" />
      <button onClick={props.handleClick} value={'shib-shiba-inu'}>
        Shiba Inu
      </button>
    </div>
  );
}

export default Shiba;
