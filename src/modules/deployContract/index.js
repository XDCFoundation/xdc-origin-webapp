import React from "react";
import BaseComponent from "../baseComponent";
import DeployContractComponent from "./deployContract";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";
import Footer from "../Footer";
import  Utility  from "../../utility";
import {contractManagementService} from "../../services"
import { connect } from "react-redux";

class DeployContract extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      draftFailedXrc20TokenDetails: [],
    };
  }

  componentDidMount() {
    this.getDraftFailedXrc20Token();
  }

  getDraftFailedXrc20Token = async () => {
    let requestData = {
      tokenOwner: this.props?.user?.accountDetails?.address,
    };
  
    let [error, contractServiceResponse] = await Utility.parseResponse(
      contractManagementService.getDraftFailedXrc20Token(requestData)
    );
    
    if (error || !contractServiceResponse) {
      console.log("getDraftFailedXrc20Token error -> ", error)
      return;
    }
  
    if (contractServiceResponse) {
      this.setState({
        draftFailedXrc20TokenDetails: contractServiceResponse,
      });
    }
  }
  deleteContract = async (tokenId) => {
    let requestData = {
      id: tokenId,
    };
  
    let [error, deleteContractResponse] = await Utility.parseResponse(
      contractManagementService.deleteContract(requestData)
    );

    if (error || !deleteContractResponse) {
      console.log("deleteContract error -> ", error)
      Utility.apiFailureToast("Failed To Delete Token!");
      return;
    }
  
    if (deleteContractResponse) {
      this.getDraftFailedXrc20Token()
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <DeployContractComponent saveDraftData={this.props.location.state} state={this.state} deleteContract={this.deleteContract}/>
        </Row>
        {window.innerWidth <= 768 ? <Footer /> : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(DeployContract);
