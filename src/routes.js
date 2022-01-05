import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {connect} from "react-redux";
import {Login, SignUp} from "./modules";
import {history} from "./managers/history";
import Dashboard from "./modules/dashboard/dashboardComponent";
import BaseComponent from "./modules/baseComponent";
import ChangeNetwork from './modules/changeNetworkPopup/index'

class Routes extends BaseComponent {

    componentDidMount() {

    }

    render() {
        return (

            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <Switch>
               
                        <Route exact path={'/'} component={Login}/>
                        <Route exact path={'/change-network'} component={ChangeNetwork}/>
                        <Route exact path={'/sign-up'} component={SignUp}/>
                        <Route exact path={'/dashboard'} component={Dashboard}/>
                        <Redirect exact from='*' to="/"/>
                    </Switch>
                </Router>
            </MuiThemeProvider>);
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps)(Routes);