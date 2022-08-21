import React from "react";
import XRPLogo from "./xrp.png";

export default function XRP(props) {
  return (
    <div className='crypto'>
      <img src={XRPLogo} alt="XRP logo" />
      <button className='btn-56' value={"XRPUSDT"} onClick={props.handleClick}>
        XRP
      </button>
    </div>
  );
}
