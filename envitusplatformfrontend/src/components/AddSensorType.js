import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSensors } from "../actions/sensorActions";
import { BASE_URL } from "../constants/AppliationConstants";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function AddSensorType() {
	const [sensorType, setSensorType] = useState("");
	const [description, setDescription] = useState("");
	const [sensorParameter, setSensorParameter] = useState("");
	const [type, setType] = useState("");

	const dispatch = useDispatch();
	const sensorList = useSelector((state) => state.sensorList);
	const { loading, error, sensors } = sensorList;

	console.log("list : ", sensors);

	const columns = [
		{ dataField: "subType", text: "Display Name", sort: true },
		{ dataField: "description", text: "Param Name", sort: true },
		{ dataField: `maxRanges[${"min"}]`, text: "Action", sort: true },
	];

	const defaultSorted = [
		{
			dataField: "name",
			order: "desc",
		},
	];

	const pagination = paginationFactory({
		page: 1,
		sizePerPage: 5,
		lastPageText: ">>",
		firstPageText: "<<",
		nextPageText: ">",
		prePageText: "<",
		showTotal: true,
		alwaysShowAllBtns: true,
		onPageChange: function(page, sizePerPage) {
			console.log("page", page);
			console.log("sizePerPage", sizePerPage);
		},
		onSizePerPageChange: function(page, sizePerPage) {
			console.log("page", page);
			console.log("sizePerPage", sizePerPage);
		},
	});

	const addSensorType = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post(`${BASE_URL}/device/adddevicefamily`, {
					subType: sensorType,
					Type: type,
					description,
					deviceFamily: "Temperature",
				})
				.then((response) => {
					console.log("response : ", response);
					if (response.data.errorCode == 0) {
						alert("Sensor type successfully added");
						window.location.reload();
					} else {
						alert("Sensor type already exists");
					}
				});
		} catch (error) {
			console.log("Error : ", error);
		}
	};

	useEffect(() => {
		dispatch(listSensors());
	}, [dispatch]);

	return (
		<div>
			{loading ? (
				<LoadingBox />
			) : error ? (
				<MessageBox variant="danger">Oops something went wrong</MessageBox>
			) : (
				<div>
					<div>
						<i
							className="ml-auto fa fa-plus-circle"
							data-toggle="modal"
							data-target="#exampleModalCenter"
							style={{ float: "right" }}
						></i>
					</div>
					<div>
						{loading ? (
							<LoadingBox />
						) : error ? (
							<MessageBox variant="danger">
								Oops something went wrong
							</MessageBox>
						) : (
							<div className="container-fluid mt-0">
								<h1>Sensor List</h1>
								{sensors && (
									<BootstrapTable
										className="mt-4"
										rowStyle={{ color: "#111", backgroundColor: "white" }}
										bootstrap4
										keyField="id"
										data={sensors}
										columns={columns}
										defaultSorted={defaultSorted}
										pagination={pagination}
									/>
								)}
							</div>
						)}
					</div>
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
										Add Sensor Type
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
										<form onSubmit={addSensorType}>
											<div className="row">
												<div className="col-md-6 mt-2">
													<p>Sensor Type</p>
													<input
														type="text"
														placeholder="Sensor Type Name"
														className="form-control"
														onChange={(e) => setSensorType(e.target.value)}
													/>
												</div>
												<div className="col-md-6 mt-2">
													<p>Sensor Type Description</p>
													<input
														type="text"
														placeholder="DEscription.."
														className="form-control"
														onChange={(e) => setDescription(e.target.value)}
													/>
												</div>

												<div className="col-md-6 mt-2">
													<p>Sensor Parameters</p>
													<select
														className="form-control"
														onChange={(e) => setSensorParameter(e.target.value)}
													>
														<option value="temparature">Temperature</option>
														<option value="pressure">Pressure</option>
													</select>
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
												<button type="submit" className="btn btn-success m-2">
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
			)}
		</div>
	);
}

export default AddSensorType;
