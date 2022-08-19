import React from "react";
import Bitcoin from './Bitcoin/Bitcoin';
import Ethereum from './Ethereum/Ethereum';
import BNB from './BNB/BNB';
import Solana from './Solana/Solana';
import Avalanche from "./Avalanche/Avalanche";
import Dodge from './Dodge/Dodge';
import Polkadot from './Polkadot/Polkadot';
import Cardano from './Cardano/Cardano';
import XRP from './XRP/XRP';

const Buttons = (props) => {
  return <div className="crypto_logos">
    <Bitcoin handleClick={props.handleClick}/>
    <Ethereum handleClick={props.handleClick}/>
    <BNB handleClick={props.handleClick}/>
    <Solana handleClick={props.handleClick}/>
    <Avalanche handleClick={props.handleClick}/>
    <Cardano handleClick={props.handleClick}/>
    <Dodge handleClick={props.handleClick}/>
    <Polkadot handleClick={props.handleClick}/>
    <XRP handleClick={props.handleClick}/>
  </div>;
};

export default Buttons;
