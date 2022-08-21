import React from "react";
import ADALogo from "./ada.png";

export default function Cardano(props) {
  return (
    <div className='crypto'>
      <img src={ADALogo} alt="Cardano logo" />
      <button className='btn btn_ada' value={"ADAUSDT"} onClick={props.handleClick}>
        Cardano
      </button>
    </div>
  );
}
