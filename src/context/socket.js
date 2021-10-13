import socketio from "socket.io-client";
import React from "react";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import PubSub from "pubsub-js";

// http://65.2.121.46:8000/
export const socket = socketio.connect("http://65.2.121.46:8000/", {
    extraHeaders: {
        'vd-udt-header': "React"
    }
});

export const SocketContext = React.createContext();

/**
 * mocks for testing node with android
 */

const patientDetails = {
    name: "testUser",
    id: 1633352769,
    birthDate: "01-01-2021",
    admitDate: "01-10-2021",
    height: "123",
    weight: "60",
    hospitalName: "test-hospital-1",
    mode: "PCMV",
    bedNumber: "bed-2"
}

// socket.emit('/app/hello', "test-string");

socket.emit('register', patientDetails);

socket.on('register_res', (data) => {
    console.log("data: " +JSON.stringify(data));
})

let monitoring_data = {
    "bedNumber": "test-bed-1",
    "hospitalName": "test-hospital-1",
    "monitoringData": {
      "cDyn": "--",
      "cStat": "--",
      "fio2": "21",
      "ie": "--",
      "leakVol": "--",
      "mVe": "--",
      "mVi": "--",
      "pPeep": "1",
      "pPip": "0",
      "pPlateau": "0",
      "pMean": "1.0",
      "rr": "0",
      "rsbi": "--",
      "spontMVe": "--",
      "te": "0.0",
      "ti": "--",
      "vTe": "--",
      "vTi": "0"
    },
    "patientId": "1633352769",
    "patientName": "Anonymous",
    "mode": "VC-CMV"
}

socket.on("patient_monitoring_data", (data) => {
    handleMonitoringSocketData(data);
});
   
socket.on("alarm_trigger_data", (data) => {
    if (data) {
        let publishData = {
            patientId: data.patientUID,
            cause: data.cause,
            addedAt: data.addedAt
        }
        PubSub.publish('alarm_trigger_data', publishData);
    };
})

const handleMonitoringSocketData = (data) => {
    // console.log("admin data in publish: " + JSON.stringify(data));
    if (data) {
        PubSub.publish('monitoring_data', data);

        if (data && data.patientList && data.patientList.length > 0) {
            data.patientList.map((patient) => {
                // console.log("admin data in publish for: " + patient.patientId);
                PubSub.publish(patient.patientId, patient);
            });
        }
    }
}


// await new Promise(resolve => setTimeout(resolve, 1000));
// socket.emit("PATIENT_MONITORING_DATA", monitoring_data);

// await new Promise(resolve => setTimeout(resolve, 1000));
// socket.emit("PATIENT_MONITORING_DATA", monitoring_data);

// var sock = new SockJS('http://localhost:8090/iomt-app/ws');
// let stompClient = Stomp.over(sock);
// sock.onopen = function() {
//   console.log('open');
// }
// stompClient.connect({}, function (frame) {
//    console.log('Connected: ' + frame);
//    stompClient.subscribe('/topic/public', function (greeting) {
//      console.log(greeting);
//      //you can execute any function here
//    });

//    stompClient.send("/app/register", {},"register message");
// });
