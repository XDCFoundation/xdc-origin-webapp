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

  render() {
    return (
      <div>
        <Header />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <ManageContractDetails deolyedTokenDetails={this.props?.location?.state?.deolyedTokenDetails}/>
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
