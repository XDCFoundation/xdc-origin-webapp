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
import ScreenSizeDetector from "screen-size-detector";
import Web3 from "web3";
import { updateAccountDetails } from "../../action";

const screen = new ScreenSizeDetector();



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
    // let tokenCode = this.props?.location?.state?.deolyedTokenDetails?.tokenContractCode;

    let tokenCode = this.state.deolyedTokenDetails?.tokenContractCode;

    const element = document.createElement("a");
    const file = new Blob([tokenCode], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = this.state.deolyedTokenDetails?.tokenName;
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

  handleXDCPayWalletChange = () => {
    window.web3 = new Web3(window.ethereum);

    if (
      window.web3.currentProvider &&
      this.props?.user?.accountDetails?.isLoggedIn
    ) {
      if (!window.web3.currentProvider.chainId) {
        //when metamask is disabled
        const state = window.web3.givenProvider.publicConfigStore._state;
        if (state.selectedAddress !== undefined) {
          let address = state.selectedAddress;
          let network =
            state.networkVersion === "50"
              ? "XDC Mainnet"
              : "XDC Apothem Testnet";

          if ((address || network) && (address !== this.props.user?.accountDetails?.address || network !== this.props.user?.accountDetails?.network)) {
            return true;
          } else {
            return false;
          }
        } else {
          //metamask is also enabled with xdcpay
        }
      }
    }
  };
  
  render() {
    return (
      <div>
        <>
          <Header />
          <Row>
            {screen.width >= 1024 ? <Sidebar /> : ""}
            {this.state.isFetched ? (
              <ManageContractDetails
                state={this.state}
                downloadSolFile={this.downloadSolFile}
                deolyedTokenDetails={this.state.deolyedTokenDetails}
                getXrc20TokenById={this.getXrc20TokenById}
                handleXDCPayWalletChange={this.handleXDCPayWalletChange}
              />
            ) : this.state.isLoading ? (
                <div className="circularProgressManageDetails">
                  <CircularProgress />
                </div>
            ) : (
              ""
            )}
          </Row>
          {screen.width <= 768 ? <Footer /> : ""}
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => ({
  updateAccountDetails: (accountDetails) => {
    dispatch(updateAccountDetails(accountDetails));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(ManageContracts);
