import React from "react";
import BaseComponent from "../baseComponent";
import DeleteContractPopup from "./deleteContract";

class DeleteContract extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <DeleteContractPopup />;
  }
}

export default DeleteContract;
