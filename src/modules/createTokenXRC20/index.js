import React from "react";
import BaseComponent from "../baseComponent";
import Token from "./token";
import HeaderComponent from "../header/header";
import DesktopSideMenu from "../dashboard/sidebar";
import { Column, Row } from "simple-flexbox";

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
        <Token />
      </>
    );
  }
}
export default CreateTokenXRC20;
