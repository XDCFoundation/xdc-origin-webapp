import React from "react";
import BaseComponent from "../baseComponent";
import CreateToken from './createToken';


class CreateTokenComponent extends BaseComponent {
  render() {
    return (
        <CreateToken state={this.state} />
    );
  }
}

export default CreateTokenComponent;
