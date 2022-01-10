import React from "react";
import BaseComponent from "../baseComponent";
import ConnectWalletPopup from "./connectWalletPopup";

class ConnectWallet extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ConnectWalletPopup />;
  }
}

export default ConnectWallet;
