import React from "react";
import BaseComponent from "../baseComponent";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";
import Footer from "../Footer";
import { connect } from "react-redux";
import UpdateProfileComponent from "./updateProfile";
import Utility from "../../utility";
import { contractManagementService } from "../../services";
import toast, { Toaster } from "react-hot-toast";
import { history } from "../../managers/history";

class UpdateProfile extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      isUpdating: false,
    };
  }

  componentDidMount() {
    
  }

  updateDeployedXrc20Token = async (updatedData) => {
    this.setState({
      isUpdating: true,
    })

    let contractAddress;
    if (this.props?.user?.accountDetails?.network === "XDC Apothem Testnet") {
      contractAddress =
        this.props?.location?.state?.deolyedTokenDetails?.smartContractAddress.replace(
          /0x/,
          "xdc"
        );
    } else {
      contractAddress =
        this.props?.location?.state?.deolyedTokenDetails?.smartContractAddress;
    }
    let requestData = {
      tokenId: this.props?.location?.state?.deolyedTokenDetails?.id,
      tokenOwner: this.props?.location?.state?.deolyedTokenDetails?.tokenOwner,
      smartContractAddress: contractAddress,
      network: this.props?.user?.accountDetails?.network,

      website: updatedData.website ? updatedData.website : this.props?.location?.state?.deolyedTokenDetails.website,
      twitter: updatedData.twitter ? updatedData.twitter : this.props?.location?.state?.deolyedTokenDetails.twitter,
      telegram: updatedData.telegram ? updatedData.telegram : this.props?.location?.state?.deolyedTokenDetails.telegram,
      symbolUrl: updatedData.image ? updatedData.image : this.props?.location?.state?.deolyedTokenDetails.tokenImage,
      email: updatedData.email ? updatedData.email : this.props?.location?.state?.deolyedTokenDetails.email,
      linkedIn: updatedData.linkedIn ? updatedData.linkedIn : this.props?.location?.state?.deolyedTokenDetails.linkedIn,
      reddit: updatedData.reddit ? updatedData.reddit : this.props?.location?.state?.deolyedTokenDetails.reddit,
      coinGecko: updatedData.coinGecko ? updatedData.coinGecko : this.props?.location?.state?.deolyedTokenDetails.coinGecko,
    };

    let [error, contractServiceResponse] = await Utility.parseResponse(
      contractManagementService.updateDeployedXrc20Token(requestData)
    );

    if (error || !contractServiceResponse) {
      toast.error("Unable To Update Details", {
        duration: 4000,
        position: "top-center",
      });
      this.setState({
        isUpdating: false,
      })
      return;
    }
    if (contractServiceResponse) {
      this.setState({
        isUpdating: false,
      })

      toast.success("Details Updated Successfully", {
        duration: 4000,
        position: "top-center",
      });

      history.push({
        pathname: "/manage-contracts",
        state: {
          deolyedTokenDetails: this.props?.location?.state?.deolyedTokenDetails,
        },
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <Toaster />
        </div>
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <UpdateProfileComponent
            state={this.state}
            setUpdatedValues={this.setUpdatedValues}
            deolyedTokenDetails={
              this.props?.location?.state?.deolyedTokenDetails
            }
            updateDeployedXrc20Token={this.updateDeployedXrc20Token}
          />
        </Row>
        {window.innerWidth <= 768 ? <Footer /> : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(UpdateProfile);
