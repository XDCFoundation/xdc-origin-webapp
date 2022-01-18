import React from "react";
import BaseComponent from "../baseComponent";
import CreateToken from "./createToken";

class CreateTokenComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreateToken location={this.props.location} state={this.state} />;
  }
}

export default CreateTokenComponent;
