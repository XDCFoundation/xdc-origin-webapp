import React from "react";
import BaseComponent from "../baseComponent";
import Sidebar from "../dashboard/sidebar";
import Header from "../header/header";
import { Row } from "simple-flexbox";
import Footer from "../Footer";
import { connect } from "react-redux";
import ManageContractDetails from "./manageContractDetails";

class ManageContracts extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
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

  render() {
    return (
      <div>
        <Header />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <ManageContractDetails
          downloadSolFile={this.downloadSolFile}
          deolyedTokenDetails={this.props?.location?.state?.deolyedTokenDetails} />
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
