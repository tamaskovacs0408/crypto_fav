import React from "react";
import ADALogo from "./ada.png";

export default function Cardano(props) {
  return (
    <div>
      <img src={ADALogo} alt="Cardano logo" />
      <button value={"ada-cardano"} onClick={props.handleClick}>
        Cardano
      </button>
    </div>
  );
}
