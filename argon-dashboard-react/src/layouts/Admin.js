import React from "react";
import PubSub from 'pubsub-js';
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import {SocketContext, socket} from '../context/socket.js';

const Admin = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();

    // const socket = React.useContext(SocketContext);
    React.useEffect(() => {
        socket.on("monitoring_data", (data) => {
            // console.log(data);
            // console.log("recieved message");
            handleSocketData(data);
        });
        return () => {
            socket.off('monitoring_data');
        };

        // token = SocketPubSubTest.subscribe('monitoring_data', handleData);
        // setToken(token);

        // return () => {
        //     SocketPubSubTest.unsubscribe(token);
        // }
    }, []);

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const handleSocketData = (data) => {
        console.log("admin data in publish: " + data.data);
        if (data.data) {
            PubSub.publish('monitoring_data', data.data);

            if (data.data && data.data.patientList && data.data.patientList.length > 0) {
                data.data.patientList.map((patient) => {
                    console.log("admin data in publish for: " + patient.patientId);
                    PubSub.publish(patient.patientId, patient);
                });
            }
        }
    }

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
        console.log("layout: " + prop.layout);
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

    const getBrandText = (path) => {
        for (let i = 0; i < routes.length; i++) {
        if (
            props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
            -1
        ) {
            return routes[i].name;
        }
        }
        return "Brand";
    };

    return (
        <SocketContext.Provider value={socket}>
        {/* <Sidebar
            {...props}
            routes={routes}
            logo={{
            innerLink: "/admin/index",
            imgSrc: require("../assets/img/brand/nocca.png").default,
            imgAlt: "...",
            }}
        /> */}
        <div className="main-content" ref={mainContent}>
            <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/admin/index" />
            </Switch>
            {/* <Container fluid>
            <AdminFooter />
            </Container> */}
        </div>
        </SocketContext.Provider>
    );
};

export default Admin;
