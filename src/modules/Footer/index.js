import React from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "./temporaryFooter";

class Footer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <FooterComponent />;
  }
}

export default Footer;
