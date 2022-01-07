import React from "react";
import BaseComponent from "../baseComponent";
import DeployContractComponent from "./deployContract";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";

class DeployContract extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          <Sidebar />
          <DeployContractComponent />
        </Row>
      </div>
    );
  }
}

export default DeployContract;
