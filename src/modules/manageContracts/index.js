import React from "react";
import BaseComponent from "../baseComponent";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";
import Footer from "../Footer";
import { connect } from "react-redux";
import ManageContractsComponent from "./manageContracts";
import Utility from "../../utility";
import { contractManagementService } from "../../services";

class ManageContracts extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      deolyedXrc20TokenDetails: [],
    };
  }

  componentDidMount() {
    this.getDeployedXrc20Token()
  }

  getDeployedXrc20Token = async () => {
    let requestData = {
      tokenOwner: this.props?.user?.accountDetails?.address,
      network: this.props?.user?.accountDetails?.network
    };

    let [error, contractServiceResponse] = await Utility.parseResponse(
      contractManagementService.getDeployedXrc20Token(requestData)
    );

    if (error || !contractServiceResponse) {
      console.error("getDeployedXrc20Token error -> ", error);
      if (error?.responseData?.length === 0) {
        this.setState({
          deolyedXrc20TokenDetails: [],
        });
      }
      return;
    }
    if (contractServiceResponse) {
      this.setState({
        deolyedXrc20TokenDetails: contractServiceResponse,
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <ManageContractsComponent deolyedXrc20TokenDetails={ this.state.deolyedXrc20TokenDetails }/>
        </Row>
        {window.innerWidth <= 768 ? <Footer /> : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ManageContracts);
