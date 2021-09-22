// import RealtimeLineChart from "./ChartViewer";
// import { useState, useEffect, useContext } from "react";
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   NavItem,
//   NavLink,
//   Nav,
//   Progress,
//   Table,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";

// import Header from "components/Headers/Header.js";
// import {SocketContext} from '../../context/socket';

// const TIME_RANGE_IN_MILLISECONDS = 20 * 1000;
// // const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 500;
// // const ADDING_DATA_RATIO = 0.8;

// const PatientDashboard = (props) => {
//   const nameList = ["a"];
//   const defaultDataList = nameList.map(name => ({
//     name: name,
//     data: []
//   }));

//   const socket = useContext(SocketContext);

//   // socket.on('new user', (msg) => {
//   //   console.log('new user msg :: ' + msg);
//   // })

//   const [dataList, setDataList] = useState(defaultDataList);
//   const [joined, setJoined] = useState(false);

//   const _dataList = dataList;
//   useEffect(() => {
//     socket.on("msg", (msg) => {
//         console.log(msg);
//         console.log("recieved message");

//         let bData = msg.data;
//         // console.log("use effect " + JSON.stringify(dataList));

//         let addedData = dataList.map(val => {
//             var currentTime = new Date();

//             return {
//                 name: val.name,
//                 data: [
//                     ...val.data,
//                     {
//                         x: currentTime,
//                         y: bData
//                     }
//                 ]
//             }
//         });

//         if (addedData[0].data && addedData[0].data.length > 200) addedData[0].data.splice(0, 10);
//         console.log("dataList: " + JSON.stringify(addedData));
//         console.log("size " + addedData[0].data && addedData[0].data.length);
//         setDataList(addedData);
//     });

//     // socket.on('disconnect', () => {
//     //   console.log(socket)
//     //   console.log("socket disconnected");
//     //   socket.disconnect();
//     // });

//     // const addDataRandomly = data => {
//     //   if (Math.random() < 1 - ADDING_DATA_RATIO) {
//     //     return data;
//     //   }
//     //   return [
//     //     ...data,
//     //     {
//     //       x: new Date(),
//     //       y: data.length * Math.random()
//     //     }
//     //   ];
//     // };
//     // const interval = setInterval(() => {
//     //   setDataList(
//     //     dataList.map(val => {
//     //       return {
//     //         name: val.name,
//     //         data: addDataRandomly(val.data)
//     //       };
//     //     })
//     //   );
//     // }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

//     return () => {
//       // socket.disconnect();
//       socket.off('msg');
//     };
// }, [dataList]);

// //   const handleInviteAccepted = (data) => {
// //     setJoined(true);
// //     console.log("invite accepted");
// //   };

//   return (
//     <>
//       <Header />
//       {/* Page content */}
//       <Container className="mt---7" >
//         <Row>
//           <Col className="mb-5 mb-xl-0" xl="9">
//             <Card className="bg-gradient-default shadow">
//               <CardHeader className="bg-transparent">
//                 <Row className="align-items-center">
//                   <div className="col">
//                     <h6 className="text-uppercase text-light ls-1 mb-1">
//                       Overview
//                     </h6>
//                     <h2 className="text-white mb-0">Pressure Data (cmH2O)</h2>
//                   </div>
//                 </Row>
//               </CardHeader>
//               <CardBody>
//                 {/* <div className="chart"> */}
//                   <RealtimeLineChart
//                     dataList={dataList}
//                     range={TIME_RANGE_IN_MILLISECONDS}
//                 />
//                 {/* <div className="chart"> */}
//                 <RealtimeLineChart
//                     dataList={dataList}
//                     range={TIME_RANGE_IN_MILLISECONDS}
//                 />
//                 {/* <div className="chart"> */}
//                 <RealtimeLineChart
//                     dataList={dataList}
//                     range={TIME_RANGE_IN_MILLISECONDS}
//                 />
//                 {/* </div> */}
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default PatientDashboard;
