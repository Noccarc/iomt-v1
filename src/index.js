import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/noccarc-dashboard.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";


// const options = {
//     position: positions.BOTTOM_CENTER,
//     timeout: 5000,
//     offset: '30px',
//     transition: transitions.SCALE
// }

ReactDOM.render(
    // <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <Redirect from="/" to="/admin/index" />
            </Switch>
        </BrowserRouter>,
    // </AlertProvider>,
  document.getElementById("root")
);