import axios from "axios";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddSensorType from "../components/AddSensorType";
import SensorParameterList from "../components/SensorParameterList";
import { BASE_URL } from "../constants/AppliationConstants";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import { Button } from "@mui/material";

import TableBKP from "../components/TableBKP";

function AddSensorScreen() {
	const [paramName, setParamName] = useState(""); //
	const [displayName, setDisplayName] = useState(""); //
	const [displayNameHtml, setdisplayNameHtml] = useState(""); //
	const [unit, setUnit] = useState(""); //
	const [unitDisplayHtml, setunitDisplayHtml] = useState(""); //
	const [isDisplayEnabled, setisDisplayEnabled] = useState(true); //
	const [displayImage, setdisplayImage] = useState("");
	const [isPrimary, setisPrimary] = useState(false);
	const [needsLiveData, setneedsLiveData] = useState(true);
	const [valuePrecision, setvaluePrecision] = useState(1); //
	const [isCsvParam, setisCsvParam] = useState(true);
	const [isFilterable, setisFilterable] = useState(true);
	const [signageDisplayLive, setsignageDisplayLive] = useState(true);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0);

	let sensorDataModel = {
		paramName,
		displayName,
		displayNameHtml,
		unit,
		unitDisplayHtml,
		isDisplayEnabled,
		displayImage,
		isPrimary,
		needsLiveData,
		valuePrecision,
		isCsvParam,
		isFilterable,
		signageDisplayLive,
		maxRanges: {
			min: min,
			max: max,
		},
	};

	const addSensorParameter = async (e) => {
		e.preventDefault();
		let data = await axios
			.post(`${BASE_URL}/sensor/add-sensor`, sensorDataModel)
			.then((result) => {
				if (result.data.errorCode == 1) {
					alert("Sensor successfully added");
					window.location.reload();
				} else if (result.data.errorCode == -1) {
					alert("Sensor already existing with this name");
				}
			});
	};
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="30px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="Sensor List" subtitle="Welcome" />
			</Box>
			<Box
				display="grid"
				gridTemplateColumns="repeat(12,1fr)"
				gridAutoRows="155px"
				gap="19px"
			>
				<Box
					gridColumn="span 12"
					gridRow="span 4"
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
							height="100%"
							ml="-2em"
							width="2000px"
							mt="-1em"
							marginRight="-2em"
						>
							<div className="container-fluid sensorTab mt-0">
								<Tabs
									style={{ height: "650px", top: "10px", position: "relative" }}
								>
									<TabList style={{ backgroundColor: "rgb(100 181 173)" }}>
										<Tab>
											<p id="sensor_page">Sensor Parameters</p>
										</Tab>
										<Tab>
											<p>Sensor Type</p>
										</Tab>
									</TabList>

									<TabPanel style={{ backgroundColor: "white" }}>
										<div>
											<i
												className="ml-auto fa fa-plus-circle"
												data-toggle="modal"
												data-target="#exampleModalCenter"
												style={{ float: "right" }}
											></i>
										</div>
										<div className="panel-content">
											<SensorParameterList />
										</div>
									</TabPanel>
									<TabPanel style={{ backgroundColor: "white" }}>
										<div className="panel-content">
											<AddSensorType />
										</div>
									</TabPanel>
								</Tabs>
								<div
									className="modal fade "
									id="exampleModalCenter"
									tabindex="-1"
									role="dialog"
									aria-labelledby="exampleModalCenterTitle"
									aria-hidden="true"
								>
									<div
										className="modal-dialog modal-dialog-centered modal-xl"
										role="document"
									>
										<div className="modal-content">
											<div className="">
												<h5
													className="modal-title text-center"
													id="exampleModalCenterTitle"
												>
													Add Sensor Parameter
												</h5>
												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close"
												>
													{/* <span aria-hidden="true">&times;</span> */}
												</button>
											</div>
											<div className="modal-body">
												<div>
													<form onSubmit={addSensorParameter}>
														<div className="row">
															<div className="col-md-6 mt-2">
																<p>Parameter Name</p>
																<input
																	type="text"
																	placeholder="parameter name"
																	className="form-control"
																	onChange={(e) => setParamName(e.target.value)}
																/>
															</div>
															<div className="col-md-6 mt-2">
																<p>Unit</p>
																<input
																	type="text"
																	placeholder="unit.."
																	className="form-control"
																	onChange={(e) => setUnit(e.target.value)}
																/>
															</div>

															<div className="col-md-6 mt-2">
																<p>Display Name</p>
																<input
																	type="text"
																	placeholder="display name"
																	className="form-control"
																	onChange={(e) =>
																		setDisplayName(e.target.value)
																	}
																/>
															</div>
															<div className="col-md-6 mt-2">
																<p>Unit Display Html</p>
																<input
																	type="text"
																	placeholder="unit display html"
																	className="form-control"
																	onChange={(e) =>
																		setunitDisplayHtml(e.target.value)
																	}
																/>
															</div>
															<div className="col-md-6 mt-2">
																<p>Display Name Html</p>
																<input
																	type="text"
																	placeholder="display name html"
																	className="form-control"
																	onChange={(e) =>
																		setdisplayNameHtml(e.target.value)
																	}
																/>
															</div>
															<div className="col-md-6 mt-2">
																<p>Display Enabled</p>
																<select
																	className="form-control"
																	onChange={(e) =>
																		setisDisplayEnabled(e.target.value)
																	}
																>
																	<option value="yes">Yes</option>
																	<option value="no">No</option>
																</select>
															</div>
															<div className="col-md-6 mt-2">
																<p>Value Precision</p>
																<input
																	type="text"
																	placeholder=""
																	className="form-control"
																	onChange={(e) =>
																		setvaluePrecision(e.target.value)
																	}
																/>
															</div>
															<div className="col-md-6 mt-2">
																<p>Min Range</p>
																<input
																	type="text"
																	placeholder=""
																	className="form-control"
																	onChange={(e) => setMin(e.target.value)}
																/>
															</div>
															<div className="col-md-6 mt-2">
																<p>Filterable</p>
																<select
																	className="form-control"
																	onChange={(e) =>
																		setisFilterable(e.target.value)
																	}
																>
																	<option value="yes">Yes</option>
																	<option value="no">No</option>
																</select>
															</div>
															<div className="col-md-6 mt-2">
																<p>Max Range</p>
																<input
																	type="text"
																	placeholder=""
																	className="form-control"
																	onChange={(e) => setMax(e.target.value)}
																/>
															</div>
														</div>
														<div style={{ float: "right" }}>
															<button
																type="button"
																className="btn btn-secondary m-2"
																data-dismiss="modal"
															>
																Close
															</button>
															<button
																type="submit"
																className="btn btn-success m-2"
															>
																Save
															</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default AddSensorScreen;
