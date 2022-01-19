import React from "react";
import BaseComponent from "../baseComponent";
import CreateToken from "./createToken";
import Footer from "../Footer";
import HeaderComponent from "../header/header";
import Sidebar from "../dashboard/sidebar";
import { Column, Row } from "simple-flexbox";

class CreateTokenComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('this----',this.props.location)
    return(
      <>
       <HeaderComponent />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <CreateToken location={this.props.location} state={this.state} />;
        </Row>
        {window.innerWidth <= 768 ? <Footer /> : ""}
      </>
    ) 
  }
}

export default CreateTokenComponent;
