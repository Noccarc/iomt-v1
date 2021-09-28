// import PubSub from 'pubsub-js';
// import { useState, useEffect, useContext } from "react";
// import {SocketContext} from './socket';

// const socket = null;
// class SocketPubSub {

//     constructor() {
//         if (socket == null) {
//             socket = useContext(SocketContext);
//         }
//     }

//     static startSocket = {
//         socket.on("monitoring_data", (data) => {
//             console.log(data);
//             console.log("recieved message");

//             handleSocketData(data);
//         });
//         return () => {
//             socket.off('monitoring_data');
//         };
//     });

//     // export const subscribe = (topic, callback) => {
//     //     var token = PubSub.subscribe(topic, callback);

//     //     return token;
//     // }

//     const unsubscribe = (token) => {
//         PubSub.unsubscribe(token);
//     }

//     const publish = (topic, data) => {
//         PubSub.publish(topic, data);
//     }

//     const handleSocketData = (data) => {
//         console.log(data.data);
//         publish('monitoring_data', data.data);
//     }

//     return (null);
// }

// // export const subscribe = (topic, callback) => {
// //     var token = PubSub.subscribe(topic, callback);

// //     return token;
// // }

// // export const unsubscribe = (token) => {
// //     PubSub.unsubscribe(token);
// // }

// export default SocketPubSub;
// // module.exports = {
// //     subscribe, unsubscribe
// // }