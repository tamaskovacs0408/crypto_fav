import React from "react";
import ETHLogo from "./eth.png";

const Ethereum = (props) => {
  return (
    <div className='crypto'>
      <img src={ETHLogo} alt="Ethereum logo" />
      <button className='btn btn_eth' value={"ETHUSDT"} onClick={props.handleClick}>
        Ethereum
      </button>
    </div>
  );
};

export default Ethereum;
