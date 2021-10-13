import React from "react";
import PubSub from 'pubsub-js';
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import routes from "routes.js";
import {SocketContext, socket} from '../context/socket.js';

const Admin = (props) => {
    const mainContent = React.useRef(null);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
                );
            } else {
                return null;
            }
        });
    };

    const options = {
        position: positions.MIDDLE,
        timeout: 5000,
        offset: '30px',
        transition: transitions.SCALE
    }

    return (
        <SocketContext.Provider value={socket}>
            <AlertProvider template={AlertTemplate} {...options}>
                {console.log("rendering Admin")}
                <div className="main-content" ref={mainContent}>
                    {/* <button onClick={onCloseAlert} style={{float:'right', zIndex:10000, position: 'absolute',top: '137px'}}>Show Alert</button> */}
                    <Switch>
                    {getRoutes(routes)}
                    <Redirect from="*" to="/admin/index" />
                    </Switch>
                </div>
            </AlertProvider>
        </SocketContext.Provider>
    );
};

export default Admin;
