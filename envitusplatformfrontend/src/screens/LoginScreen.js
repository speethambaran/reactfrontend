import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../constants/AppliationConstants";
import { useNavigate } from "react-router-dom";

function LoginScreen(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post(`${BASE_URL}/login/`, { username, password })
			.then((response) => {
				if (response.data.errorCode !== -1) {
					localStorage.setItem(
						"loginStatus",
						JSON.stringify({ loggedIn: true })
					);
					localStorage.setItem("userData", JSON.stringify(response.data.data));
					navigate("/dashboard");
				} else {
					alert("Invalid username or password");
				}
			});
	};

	return (
		<div>
			{/*  */}
			<div className="container-fluid authentication-screen">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<div className="container-fluid p-4">
							<form onSubmit={handleSubmit}>
								<div className="formBx p-4">
									<h2 className="title text-center">Login Here</h2>
									<p>Username</p>
									<input
										type="text"
										className="form-control"
										placeholder="Enter username"
										onChange={(e) => setUsername(e.target.value)}
									/>
									<p>Password</p>
									<input
										type="password"
										className="form-control"
										placeholder="Enter password"
										onChange={(e) => setPassword(e.target.value)}
									/>
									<div className="mt-1">
										<button type="submit" className="submitBtn">
											Login
										</button>
									</div>
									<a
										style={{ textDecoration: "none", fontSize: "14px" }}
										href="/register"
									>
										Create new Account ?
									</a>
								</div>
							</form>
						</div>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
