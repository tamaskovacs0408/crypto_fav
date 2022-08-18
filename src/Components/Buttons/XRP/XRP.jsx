import React from "react";
import XRPLogo from "./xrp.png";

export default function XRP(props) {
  return (
    <div>
      <img src={XRPLogo} alt="XRP logo" />
      <button value={"xrp-xrp"} onClick={props.handleClick}>
        XRP
      </button>
    </div>
  );
}