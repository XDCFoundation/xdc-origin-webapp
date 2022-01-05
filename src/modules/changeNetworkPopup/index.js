import React from "react";
import BaseComponent from "../baseComponent";
// import ChangeNetwork from './changeNetwork';
import FormDialog from './ChangeNetwork'


class ChangeNetworkComponent extends BaseComponent {
  render() {
    return (
        <FormDialog state={this.state} />
    );
  }
}

export default ChangeNetworkComponent;
