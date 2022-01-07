import React from "react";
import BaseComponent from "../baseComponent";
// import ChangeNetwork from './changeNetwork';
import ChangeNetworkPopup from './changeNetwork';
import ChangeNetworkScreen from './changeNetworkMobile'


class ChangeNetworkComponent extends BaseComponent {
  render() {
    return (
        <ChangeNetworkPopup state={this.state} />
    );
  }
}

export default ChangeNetworkComponent;
