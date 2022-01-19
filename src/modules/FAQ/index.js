import React from "react";
import BaseComponent from "../baseComponent";
import FaqComponent from "./Faq";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";


class FAQ extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <FaqComponent />
        </Row>
        
      </div>
    );
  }
}

export default FAQ;
