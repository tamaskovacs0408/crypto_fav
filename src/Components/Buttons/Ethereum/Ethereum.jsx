import React from "react";
import ETHLogo from "./eth.png";

const Ethereum = (props) => {
  return (
    <div>
      <img src={ETHLogo} alt="Ethereum logo" />
      <button value={"ETHUSDT"} onClick={props.handleClick}>
        Ethereum
      </button>
    </div>
  );
};

export default Ethereum;
