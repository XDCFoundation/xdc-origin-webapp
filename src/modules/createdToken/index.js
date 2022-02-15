import React from "react";
import BaseComponent from "../baseComponent";
import CreateToken from "./createToken";
import Footer from "../Footer";
import HeaderComponent from "../header/header";
import Sidebar from "../dashboard/sidebar";
import { Column, Row } from "simple-flexbox";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";

class CreateTokenComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
       priceValue: ""
    };
  }

  componentDidMount() {
    this.coinMarketUSDPriceDetails();
  }

  coinMarketUSDPriceDetails = async () => {
    const [err, res] = await Utils.parseResponse(SaveDraftService.getCoinMarketCap());
    if (err) {
      console.log('er--',err)
    }
    else{
      this.setState({priceValue: res[0]?.price})
    }
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <Row>
          {window.innerWidth >= 1024 ? <Sidebar /> : ""}
          <CreateToken priceValue={this.state.priceValue} location={this.props.location} state={this.state} />;
        </Row>
        {window.innerWidth <= 768 ? <Footer /> : ""}
      </>
    )
  }
}

export default CreateTokenComponent;
