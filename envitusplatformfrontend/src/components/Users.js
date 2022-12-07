import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers, deleteUser } from "../actions/userActions";
import { BASE_URL } from "../constants/AppliationConstants";
import DeletedUser from "./DeletedUser";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "./Header";
import { Button } from "@mui/material";

export default function Users() {
	const [user, setUser] = useState([]);
	const [deactivatedUser, setDeactivatedUser] = useState([]);

	const dispatch = useDispatch();
	const userList = useSelector((state) => state.userList);
	const { loading, error, users } = userList;

	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	useEffect(() => {
		dispatch(listUsers());
	}, [dispatch]);

	const deleteUser = async (userId) => {
		let deletedUser = await axios.post(`${BASE_URL}/users/deleteuser/`, {
			id: userId,
		});
		if (deletedUser.status == 200) {
			// alert('Do you want to delete')
			return window.confirm("Do you want to delete");
		}
	};

	return (
		// <div className="container-fluid mt-1">
		// 	<h2>All Users</h2>
		// 	{loading ? (
		// 		<LoadingBox></LoadingBox>
		// 	) : error ? (
		// 		<MessageBox variant="danger">{error}</MessageBox>
		// 	) : (
		// 		<div className="scroll panel-content">
		// 			{users.length == 0 ? (
		// 				<h1 className="empty">
		// 					<img
		// 						src="data:image/png;base64,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"
		// 						className="w-25"
		// 					/>
		// 					No User Found!
		// 				</h1>
		// 			) : (
		// 				<div className="table-responsive">
		// 					<table className="table mt-2" style={{ backgroundColor: "grey" }}>
		// 						<thead className="thead-light">
		// 							<tr>
		// 								<th scope="col">No</th>
		// 								<th scope="col">Name</th>
		// 								<th scope="col">Role</th>
		// 								<th scope="col">Username</th>
		// 								<th scope="col">Email</th>
		// 								<th scope="col">Status</th>
		// 								<th scope="col">Actions</th>
		// 							</tr>
		// 						</thead>
		// 						<tbody>
		// 							{users.map((user, index) => (
		// 								<tr>
		// 									<th scope="row">{index + 1}</th>
		// 									<td>{user.name}</td>
		// 									<td>{user.role}</td>
		// 									<td>{user.username}</td>
		// 									<td>{user.email}</td>
		// 									<td
		// 										style={{ height: "4px" }}
		// 										className={`${
		// 											user.is_active == true ? "active" : "inactive"
		// 										}`}
		// 									>
		// 										{user.is_active == true ? "active" : "inactive"}
		// 									</td>
		// 									<td>
		// 										<i className="fa fa-pencil m-1"></i>
		// 										<i
		// 											className="fa fa-trash m-1"
		// 											onClick={(e) => deleteUser(user.id)}
		// 										></i>
		// 										<i className="fa fa-eye m-1"></i>
		// 									</td>
		// 								</tr>
		// 							))}
		// 						</tbody>
		// 					</table>
		// 				</div>
		// 			)}
		// 			<div className="mt-1">
		// 				<DeletedUser userList={users} />
		// 			</div>
		// 		</div>
		// 	)}
		// </div>
		<Box m="30px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="All Users" subtitle="Welcome" />
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
							<div>
								{loading ? (
									<LoadingBox></LoadingBox>
								) : error ? (
									<MessageBox variant="danger">{error}</MessageBox>
								) : (
									<div className="scroll panel-content">
										{users.length == 0 ? (
											<h1 className="empty">
												<img
													src="data:image/png;base64,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"
													className="w-25"
												/>
												No User Found!
											</h1>
										) : (
											<div className="table-responsive">
												<table
													className="table mt-2"
													style={{ backgroundColor: "whitesmoke" }}
												>
													<thead className="thead-light">
														<tr>
															<th scope="col">No</th>
															<th scope="col">Name</th>
															<th scope="col">Role</th>
															<th scope="col">Username</th>
															<th scope="col">Email</th>
															<th scope="col">Status</th>
															<th scope="col">Actions</th>
														</tr>
													</thead>
													<tbody>
														{users.map((user, index) => (
															<tr>
																<th scope="row">{index + 1}</th>
																<td>{user.name}</td>
																<td>{user.role}</td>
																<td>{user.username}</td>
																<td>{user.email}</td>
																<td
																	style={{ height: "4px" }}
																	className={`${
																		user.is_active == true
																			? "active"
																			: "inactive"
																	}`}
																>
																	{user.is_active == true
																		? "active"
																		: "inactive"}
																</td>
																<td>
																	<i className="fa fa-pencil m-1"></i>
																	<i
																		className="fa fa-trash m-1"
																		onClick={(e) => deleteUser(user.id)}
																	></i>
																	<i className="fa fa-eye m-1"></i>
																</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										)}
										<div className="mt-1">
											<DeletedUser userList={users} />
										</div>
									</div>
								)}
							</div>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
