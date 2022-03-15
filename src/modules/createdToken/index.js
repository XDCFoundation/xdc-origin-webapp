import React from "react";
import BaseComponent from "../baseComponent";
import CreateToken from "./createToken";
import Footer from "../Footer";
import HeaderComponent from "../header/header";
import Sidebar from "../dashboard/sidebar";
import { Row } from "simple-flexbox";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";
import ScreenSizeDetector from "screen-size-detector";

const screen = new ScreenSizeDetector();


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
          {screen.width >= 1024 ? <Sidebar /> : ""}
          <CreateToken priceValue={this.state.priceValue} location={this.props.location} state={this.state} tokenDetails={this.props} />;
        </Row>
        {screen.width <= 1023 ? <Footer /> : ""}
      </>
    )
  }
}

export default CreateTokenComponent;
