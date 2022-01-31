import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { history } from "./managers/history";
import Dashboard from "./modules/dashboard/dashboardComponent";
import BaseComponent from "./modules/baseComponent";
import CreatedToken from "./modules/createdToken";
import About from "./modules/aboutScreen/about";
import ChangeNetwork from "./modules/changeNetworkPopup/changeNetworkMobile";
import DeployContract from "./modules/deployContract";
import CreateTokenXRC20 from "../src/modules/createTokenXRC20";
import UploadTokenImage from "./modules/uploadTokenImage";
import Faq from "./modules/FAQ";

import WalletPopup from "../src/modules/connectWallet/connectWalletMobile";
import WalletPopupDesktop from "./modules/connectWallet";
import ManageContracts from "./modules/manageContracts";
import UpdateProfile from "./modules/updateProfile";

class Routes extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            {/* <Route exact from="/" to="/dashboard/about" /> */}
            {/*<Route exact path={"/"} component={Login} />*/}
            {/*<Route exact path={"/sign-up"} component={SignUp} />*/}
            <Route exact path={"/faq"} component={Faq} />

            {
              !this.props?.user?.accountDetails?.address
                ? <Route exact path={"/"} component={Dashboard} />
                : ""
            }
            <Route exact path={"/"} component={Dashboard} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/created-token"} component={CreatedToken} />
            <Route exact path={"/deploy-contract"} component={DeployContract} />
            <Route exact path={"/token-XRC20"} component={CreateTokenXRC20} />
            <Route exact path={"/token-XRC20/:id"} component={CreateTokenXRC20} />
            {/* <Route exact path={'/change-network'} component={ChangeNetwork}/> */}
            <Route exact path={"/change-network"} component={ChangeNetwork} />
            <Route
              exact
              path={"/upload-token-image"}
              component={UploadTokenImage}
            />
            <Route
              exact
              path={"/connect-wallet-mobile"}
              component={WalletPopup}
            />
            <Route
              exact
              path={"/connect-wallet-desktop"}
              component={WalletPopupDesktop}
            />
            <Route
              exact
              path={"/manage-contracts"}
              component={ManageContracts}
            />
            <Route
              exact
              path={"/update-profile"}
              component={UpdateProfile}
            />
            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
