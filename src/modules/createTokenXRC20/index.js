import React from "react";
import BaseComponent from "../baseComponent";
import Token from "./basicInformation";
import HeaderComponent from "../header/header";
import Sidebar from "../dashboard/sidebar";
import { Column, Row } from "simple-flexbox";
import CommonTabs from "./commonTab";
import Footer from "../Footer";

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
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <CommonTabs image={this.props.location.state}/>
        </Row>
        {window.innerWidth <= 768 ? <Footer /> : ""}
      </>
    );
  }
}
export default CreateTokenXRC20;
