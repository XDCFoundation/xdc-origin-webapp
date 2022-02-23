import React from "react";
import BaseComponent from "../baseComponent";
import ChangeNetworkPopup from './changeNetworkDesktop';


class ChangeNetworkComponent extends BaseComponent {
  render() {
    return (
        <ChangeNetworkPopup state={this.state} />
    );
  }
}

export default ChangeNetworkComponent;
