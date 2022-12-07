import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDevices } from "../actions/deviceActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "./Header";
import { Button } from "@mui/material";

function DeviceList() {
	const dispatch = useDispatch();
	const deviceList = useSelector((state) => state.deviceList);
	const { loading, error, device } = deviceList;

	console.log("DEVICES-------------------", device);

	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	useEffect(() => {
		dispatch(listDevices());
	}, [dispatch]);
	return (
		// <div className="container-fluid" style={{ width: "100%" }}>
		// 	<h2>Device List</h2>
		// 	<div class="table-wrapper-scroll-y my-custom-scrollbar">
		// 		{loading ? (
		// 			<LoadingBox />
		// 		) : error ? (
		// 			<MessageBox />
		// 		) : (
		// 			<table class="table table-bordered table-striped mb-0 device-list bg-light">
		// 				<thead>
		// 					<tr>
		// 						<th scope="col">No</th>
		// 						<th scope="col">Device ID</th>
		// 						<th scope="col">Status</th>
		// 						<th scope="col">SubType</th>
		// 						<th scope="col">Type</th>
		// 						<th scope="col">City</th>
		// 						<th scope="col">LandMark</th>
		// 						<th scope="col">Actions</th>
		// 					</tr>
		// 				</thead>
		// 				<tbody>
		// 					{device &&
		// 						device.map((dev, index) => (
		// 							<tr>
		// 								<th scope="row">{index + 1}</th>
		// 								<td>{dev.deviceId}</td>
		// 								<td>
		// 									<i
		// 										className={`fa fa-dot-circle-o ${
		// 											dev.lastDataReceiveTime - new Date().valueOf() <
		// 											15 * 60 * 1000
		// 												? "live"
		// 												: "not-live"
		// 										}`}
		// 										style={{
		// 											borderRadius: "50%",
		// 										}}
		// 									></i>
		// 								</td>
		// 								<td>{dev.subType}</td>
		// 								<td>{dev.type}</td>
		// 								<td>{dev.location.city}</td>
		// 								<td>{dev.location.landMark}</td>
		// 								<td>
		// 									<i className="fa fa-pencil m-1"></i>
		// 									<i className="fa fa-trash m-1"></i>
		// 									<i className="fa fa-eye m-1"></i>
		// 								</td>
		// 							</tr>
		// 						))}
		// 				</tbody>
		// 			</table>
		// 		)}
		// 	</div>
		// </div>
		<Box m="30px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="Device List" subtitle="Welcome" />
			</Box>
			<Box
				display="grid"
				gridTemplateColumns="repeat(12,1fr)"
				gridAutoRows="155px"
				gap="19px"
			>
				<Box
					gridColumn="span 12"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Box
						mt="10px"
						p="0 30px"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box
							height="250px"
							ml="-2em"
							width="2000px"
							mt="-1em"
							marginRight="-2em"
						>
							<div class="table-wrapper-scroll-y my-custom-scrollbar">
								{loading ? (
									<LoadingBox />
								) : error ? (
									<MessageBox />
								) : (
									<table class="table table-bordered table-striped mb-0 device-list bg-light">
										<thead>
											<tr>
												<th scope="col">No</th>
												<th scope="col">Device ID</th>
												<th scope="col">Status</th>
												<th scope="col">SubType</th>
												<th scope="col">Type</th>
												<th scope="col">City</th>
												<th scope="col">LandMark</th>
												<th scope="col">Actions</th>
											</tr>
										</thead>
										<tbody>
											{device &&
												device.map((dev, index) => (
													<tr>
														<th scope="row">{index + 1}</th>
														<td>{dev.deviceId}</td>
														<td>
															<i
																className={`fa fa-dot-circle-o ${
																	dev.lastDataReceiveTime -
																		new Date().valueOf() <
																	15 * 60 * 1000
																		? "live"
																		: "not-live"
																}`}
																style={{
																	borderRadius: "50%",
																}}
															></i>
														</td>
														<td>{dev.subType}</td>
														<td>{dev.type}</td>
														<td>{dev.location.city}</td>
														<td>{dev.location.landMark}</td>
														<td>
															<i className="fa fa-pencil m-1"></i>
															<i className="fa fa-trash m-1"></i>
															<i className="fa fa-eye m-1"></i>
														</td>
													</tr>
												))}
										</tbody>
									</table>
								)}
							</div>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default DeviceList;
