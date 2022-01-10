import React from "react";
import BaseComponent from "../baseComponent";
import Token from "./basicInformation";
import HeaderComponent from "../header/header";
import Sidebar from "../dashboard/sidebar";
import { Column, Row } from "simple-flexbox";
import CommonTabs from "./commonTab";

class CreateTokenXRC20 extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <HeaderComponent />
        <Row>
          <CommonTabs />
        </Row>
      </>
    );
  }
}
export default CreateTokenXRC20;
