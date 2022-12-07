import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDevices } from "../actions/deviceActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const columns = [
	{ id: "deviceId", label: "Device Id", minWidth: 170 },
	{ id: "subType", label: "Sub Type", minWidth: 170 },
	{ id: `location[${"city"}]`, label: "Sub Type", minWidth: 170 },
];

function DeviceList({ role }) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const dispatch = useDispatch();
	const deviceList = useSelector((state) => state.deviceList);
	const { loading, error, device } = deviceList;
	const [currentDevice, setCurrentDevice] = React.useState(device && device[0]);

	const selectedDevice = async (id) => {
		setCurrentDevice(id);
	};

	useEffect(() => {
		dispatch(listDevices());
	}, [dispatch]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<div>
			<div className="">
				{loading ? (
					<LoadingBox />
				) : error ? (
					<MessageBox>{error}</MessageBox>
				) : (
					<div className="container">
						{/* <CSVLink className='btn btn-success ml-auto' style={{float:"right",top:"-10px",position:"relative"}} data={dataRow}>Download Data</CSVLink> */}
						<Paper sx={{ width: "100%", overflow: "hidden" }}>
							<TableContainer sx={{ maxHeight: 440 }}>
								<Table stickyHeader aria-label="sticky table">
									<TableHead>
										<TableRow>
											{columns.map((column) => (
												<TableCell
													key={column.id}
													align={column.align}
													style={{ minWidth: column.minWidth }}
												>
													{column.label}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{device ? (
											device
												.slice(
													page * rowsPerPage,
													page * rowsPerPage + rowsPerPage
												)
												.map((row) => {
													return (
														<TableRow
															hover
															role="checkbox"
															tabIndex={-1}
															key={row.code}
														>
															{columns.map((column) => {
																const value = row[column.id];
																return (
																	<TableCell
																		key={column.id}
																		align={column.align}
																	>
																		{column.format && typeof value === "number"
																			? column.format(value)
																			: value}
																	</TableCell>
																);
															})}
														</TableRow>
													);
												})
										) : (
											<h1>NO DATA</h1>
										)}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[10, 25, 100]}
								component="div"
								count={device ? device.length : 0}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</Paper>
					</div>
				)}
			</div>
		</div>
	);
}

export default DeviceList;
