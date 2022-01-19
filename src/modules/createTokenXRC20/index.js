import React from "react";
import BaseComponent from "../baseComponent";
import Token from "./basicInformation";
import HeaderComponent from "../header/header";
import Sidebar from "../dashboard/sidebar";
import { Column, Row } from "simple-flexbox";
import CommonTabs from "./commonTab";
import Footer from "../Footer";
import contractManagementService from "../../services/contractManagementService";
import Utility from "../../utility";



class CreateTokenXRC20 extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      xrc20TokenDetails: {},
    };
  }

  async componentDidMount() {
    const id = this.props.match.params ? this.props.match.params.id : "";
    if (id) {
      this.getXrc20TokenById(id)
    }
  }

  getXrc20TokenById = async (tokenId) => {
    let requestData = {
      id: tokenId,
    };

    let [error, xrc20TokenResponse] = await Utility.parseResponse(
      contractManagementService.getXrc20TokenById(requestData)
    );

    if (error || !xrc20TokenResponse) {
      console.error("getXrc20TokenById error -> ", error)
      Utility.apiFailureToast("Failed To Fetch Token Details!");
      return;
    }

    if (xrc20TokenResponse) {
      this.setState({
        xrc20TokenDetails: xrc20TokenResponse[0],
      });
    }
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <CommonTabs image={this.props.location.state} state={this.state}/>
        </Row>
        {window.innerWidth <= 768 ? <Footer /> : ""}
      </>
    );
  }
}
export default CreateTokenXRC20;
