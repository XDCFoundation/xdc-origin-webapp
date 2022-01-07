import React from "react";
import BaseComponent from "../baseComponent";
import deleteContractPopup from "./deleteContract";

class DeleteContract extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <deleteContractPopup />;
  }
}

export default DeleteContract;
