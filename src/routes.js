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
import ChangeNetwork from './modules/changeNetworkPopup/changeNetworkMobile'
import DeployContract from "./modules/deployContract";
import CreateTokenXRC20 from "../src/modules/createTokenXRC20";
import UploadTokenImage from "./modules/uploadTokenImage";
import WalletPopup from "../src/modules/connectWallet/connectWalletMobile"


class Routes extends BaseComponent {
  componentDidMount() {}
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            {/* <Route exact from="/" to="/dashboard/about" /> */}
            {/*<Route exact path={"/"} component={Login} />*/}
            {/*<Route exact path={"/sign-up"} component={SignUp} />*/}
            <Route exact path={"/"} component={Dashboard} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/created-token"} component={CreatedToken} />
            <Route exact path={"/deploy-contract"} component={DeployContract} />
            <Route exact path={"/token-XRC20"} component={CreateTokenXRC20} />
            {/* <Route exact path={'/change-network'} component={ChangeNetwork}/> */}
            <Route exact path={'/change-network'} component={ChangeNetwork}/>
            <Route exact path={'/upload-token-image'} component={UploadTokenImage}/>
            <Route exact path={'/wallet-popup'} component={WalletPopup}/>
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
