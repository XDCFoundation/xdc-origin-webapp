import React from "react";
import BaseComponent from "../baseComponent";
import DeployContractComponent from "./deployContract";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";
import Footer from "../Footer";
import  Utility  from "../../utility";
import {contractManagementService} from "../../services"

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
    // Need to fetch tokenOwner from Redux
    let requestData = {
      tokenOwner: "0xc95b2c9d6a84a8c17c6b8722d0a8cc9afb024dfd",
    };
  
    let [error, contractServiceResponse] = await Utility.parseResponse(
      contractManagementService.getDraftFailedXrc20Token(requestData)
    );

    if (error || !contractServiceResponse) {
      console.log("getDraftFailedXrc20Token error -> ", error)
      Utility.apiFailureToast("Failed To Fetch Token Details!");
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
      Utility.apiSuccessToast("Token Deleted Successfully!");
      this.getDraftFailedXrc20Token()
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <DeployContractComponent state={this.state} deleteContract={this.deleteContract}/>
        </Row>
        {window.innerWidth <= 768 ? <Footer /> : ""}
      </div>
    );
  }
}

export default DeployContract;
