import React from "react";
import "../../assets/styles/custom.css"
import BaseComponent from "../baseComponent";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";
import Footer from "../Footer";
import { connect } from "react-redux";
import ManageContractDetails from "./manageContractDetails";
import contractManagementService from "../../services/contractManagementService";
import Utility from "../../utility";
import { CircularProgress } from "@material-ui/core";



class ManageContracts extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      deolyedTokenDetails: [],
      isFetched: false,
      isLoading: false,
    };
  }

  async componentDidMount() {
    if (this.props?.location?.state?.id) {
      this.setState({
        id: this.props?.location?.state?.id,
      })
      await this.getXrc20TokenById(this.props?.location?.state?.id, true);
    }
  }

  downloadSolFile = () => {
    let tokenCode = this.props?.location?.state?.deolyedTokenDetails?.tokenContractCode;

    const element = document.createElement("a");
    const file = new Blob([tokenCode], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = this.props?.location?.state?.deolyedTokenDetails?.tokenName;
    document.body.appendChild(element); 
    element.click();
  }

  getXrc20TokenById = async (tokenId, initialCall = false) => {
    this.setState({
      isLoading: true,
    });

    let requestData = {
      id: tokenId || this.state.id,
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
      console.log("xrc20TokenResponse",xrc20TokenResponse)
      if (initialCall) {
        this.setState({
          deolyedTokenDetails: xrc20TokenResponse[0],
          isFetched: true,
          isLoading: false,
        });
      } else {
        this.setState({
          deolyedTokenDetails: xrc20TokenResponse[0],
          isLoading: false,
        });
      }
    }
  }

  render() {
    return (
      <div>
        <>
          <Header />
          <Row>
            {window.innerWidth >= 1024 ? <Sidebar /> : ""}
            {this.state.isFetched ? (
              <ManageContractDetails
                state={this.state}
                downloadSolFile={this.downloadSolFile}
                deolyedTokenDetails={this.state.deolyedTokenDetails}
                getXrc20TokenById={this.getXrc20TokenById}
              />
            ) : this.state.isLoading ? (
                <div className="circularProgressManageDetails">
                  <CircularProgress />
                </div>
            ) : (
              ""
            )}
          </Row>
          {window.innerWidth <= 768 ? <Footer /> : ""}
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ManageContracts);
