import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSensorParameters } from "../actions/sensorActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function SensorParameterList() {
	const dispatch = useDispatch();
	const paramList = useSelector((state) => state.sensorParameterList);
	const { loading, error, parameters } = paramList;

	console.log("parameters : ", parameters);

	useEffect(() => {
		dispatch(listSensorParameters());
	}, [dispatch]);

	const columns = [
		{ dataField: "displayName", text: "Display Name", sort: true },
		{ dataField: "paramName", text: "Param Name", sort: true },
		{ dataField: `maxRanges[${"min"}]`, text: "Min", sort: true },
		{ dataField: `maxRanges[${"max"}]`, text: "Max", sort: true },
	];

	const defaultSorted = [
		{
			dataField: "name",
			order: "desc",
		},
	];

	const pagination = paginationFactory({
		page: 1,
		sizePerPage: 10,
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

	return (
		<div>
			{loading ? (
				<LoadingBox />
			) : error ? (
				<MessageBox variant="danger">Oops something went wrong</MessageBox>
			) : (
				<div className="container-fluid mt-0">
					<h1>Sensor Lists</h1>
					{parameters && (
						<BootstrapTable
							className="mt-4"
							rowStyle={{ color: "#111", backgroundColor: "white" }}
							bootstrap4
							keyField="id"
							data={parameters}
							columns={columns}
							defaultSorted={defaultSorted}
							pagination={pagination}
						/>
					)}
				</div>
			)}
		</div>
	);
}

export default SensorParameterList;
