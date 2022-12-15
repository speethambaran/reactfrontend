import { useState } from "react";
import FormInput from "../screens/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/AppliationConstants";

const Register = (props) => {
	const [Values, setValues] = useState({
		username: "",
		email: "",
		name: "",
		phone: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`${BASE_URL}/register/`, { Values }).then((result) => {
				// if (result.data.errorCode == 0) {
				//   props.history.push("/");
				// }
			});
		} catch (error) {
			console.log("Err : ", error);
		}
	};

	const navigate = useNavigate();
	const onChange = (e) => {
		setValues({ ...Values, [e.target.name]: e.target.value });
	};

	const inputs = [
		{
			id: 1,
			name: "username",
			errorMessage:
				"Should be 3-16 characters and shouldn't include any special character",
			placeholder: "Your name",
			type: "text",
			pattern: "^[A-Za-z0-9]{3,16}$",
			required: true,
		},
		{
			id: 2,
			name: "email",
			errorMessage: "should be a valid email address",
			placeholder: "Your email",
			type: "email",
			// pattern:"^/S+@/S+/./S+$",

			required: true,
		},
		{
			id: 3,
			name: "phone",
			errorMessage: "should be 10 digits",
			placeholder: "Your contact",
			type: "tel",
			pattern: "^[0-9]{10,12}",
			required: true,
		},
		{
			id: 4,
			name: "name",
			// label: "Your username",
			errorMessage:
				"Should be 3-16 characters and shouldn't include any special character",
			placeholder: "Your username",
			type: "text",
			pattern: "^[A-Za-z0-9]{3,16}$",
			required: true,
		},
		{
			id: 5,
			name: "password",
			// label: "Your password",
			errorMessage: " must be eight characters or longer",
			placeholder: "Your password",
			type: "password",
			// pattern: "^(?=.{8,})",
			required: true,
		},
	];

	return (
		<div className="app authentication-screen">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-0"></div>
					<div className="col-md-7">
						{/* <img
              src="https://www.fullestop.com/blog/wp-content/uploads/2019/04/Importance-of-good-UXUI-for-Startups.jpg"
              className="back-cover-img"
            /> */}
					</div>
					<div className="col-md-4">
						<div className="formBx p-3">
							<form onSubmit={handleSubmit}>
								<h1 className="text-center title">Register Here</h1>
								{inputs.map((input) => (
									<FormInput
										className="form-input-field form-control"
										key={input.id}
										{...input}
										value={Values[input.name]}
										onChange={onChange}
									/>
								))}
								<button type="submit" className="submitBtn">
									Submit
								</button>
								<p className="mt-2">
									Already Registered?<a href="/">Login</a>
								</p>
							</form>
						</div>
						<div className="col-md-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
