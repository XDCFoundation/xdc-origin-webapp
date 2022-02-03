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

  componentDidMount() {}

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
      contractAddress: contractAddress,
      website: updatedData.website,
      twitter: updatedData.twitter,
      telegram: updatedData.telegram,
      symbolUrl: updatedData.image
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
        pathname: "/manage-contract-details",
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
