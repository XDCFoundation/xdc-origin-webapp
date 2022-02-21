import React from "react";
import BaseComponent from "../baseComponent";
import DeployContractComponent from "./deployContract";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";
import Footer from "../Footer";
import Utility from "../../utility";
import { contractManagementService } from "../../services";
import { connect } from "react-redux";
import Web3 from "web3";
import { updateAccountDetails } from "../../action";
import ScreenSizeDetector from "screen-size-detector";

const screen = new ScreenSizeDetector();

class DeployContract extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      draftFailedXrc20TokenDetails: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleXDCPayWalletChange();
    setTimeout(() => {
      this.getDraftFailedXrc20Token();
    }, 1000);
  }

  handleXDCPayWalletChange = async () => {
    this.setState({
      isLoading: true,
    })

    window.web3 = new Web3(window.ethereum);

    if (
      window.web3.currentProvider &&
      this.props?.userDetails?.accountDetails?.isLoggedIn
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

          if (address || network) {
            let balance = null;

            await window.web3.eth.getBalance(address).then((res) => {
              balance = res / Math.pow(10, 18);
              balance = this.truncateToDecimals(balance);
            });

            let accountDetails = {
              address: address,
              network: network,
              balance: balance,
              isLoggedIn: true,
            };

            this.props.updateAccountDetails(accountDetails);
          }
        } else {
          //metamask is also enabled with xdcpay
          const state = window.web3.givenProvider.publicConfigStore._state;
          let address = state.selectedAddress;
          let network =
            state.networkVersion === "50"
              ? "XDC Mainnet"
              : "XDC Apothem Testnet";
        }
      }
    }
  };

  truncateToDecimals = (num, dec = 2) => {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
  }

  getDraftFailedXrc20Token = async () => {
    let requestData = {
      tokenOwner: this.props?.user?.accountDetails?.address,
      network: this.props?.user?.accountDetails?.network
    };

    let [error, contractServiceResponse] = await Utility.parseResponse(
      contractManagementService.getDraftFailedXrc20Token(requestData)
    );

    if (error || !contractServiceResponse) {
      console.error("getDraftFailedXrc20Token error -> ", error);
      if (error?.responseData?.length === 0) {
        this.setState({
          draftFailedXrc20TokenDetails: [],
          isLoading: false,
        });
      }
      return;
    }
    if (contractServiceResponse) {
      this.setState({
        draftFailedXrc20TokenDetails: contractServiceResponse,
        isLoading: false,
      });
    }
  };
  deleteContract = async (tokenId) => {
    let requestData = {
      id: tokenId,
    };

    let [error, deleteContractResponse] = await Utility.parseResponse(
      contractManagementService.deleteContract(requestData)
    );

    if (error || !deleteContractResponse) {
      console.error("deleteContract error -> ", error);
      return;
    }

    if (deleteContractResponse) {
      this.getDraftFailedXrc20Token();
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Row>
          {screen.width >= 1024 ? <Sidebar /> : ""}
          <DeployContractComponent
            saveDraftData={this.props.location.state}
            state={this.state}
            deleteContract={this.deleteContract}
          />
        </Row>
        {screen.width <= 1023 ? <Footer /> : ""}
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

export default connect(mapStateToProps,mapDispatchToProps)(DeployContract);
