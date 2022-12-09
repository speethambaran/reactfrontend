import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../constants/AppliationConstants";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo.png";
import login from "assets/login.png";
import { Box, useTheme } from "@mui/material";

function LoginScreen(props) {
    const theme = useTheme();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("submit called", { username, password });
        await axios
            .post(`${BASE_URL}/login/`, { username, password })
            .then((response) => {
                console.log('response : ', response.data)
                if (response.data.errorCode !== -1) {
                    localStorage.setItem(
                        "loginStatus",
                        JSON.stringify({ loggedIn: true })
                    );
                    localStorage.setItem("userData", JSON.stringify(response.data.data))
                    navigate("/dashboard");
                } else {
                    alert("Invalid username or password");
                }
            });
    };

    return (

        // <div>
        // <div className="container-fluid authentication-screen">
            <div className="row" >

                <div className="col-md-8 mb-4">
                    <Box
                        component="img"
                        alt="profile"
                        src={login}
                        width="800px"
                        height="500px"

                    />

                </div>
                <div className="col-md-4 ml-5" >

                    <div className="container py-4">

                        {/* <div className="card " > */}
                        <div className="text-left">

                            <form onSubmit={handleSubmit} >
                                <Box
                                    component="img"
                                    alt="profile"
                                    src={logo}
                                    width="220px"
                                    height="90px"
                                // borderRadius="50%"
                                // sx={{ objectFit: "cover" }}
                                />

                                <h2 style={{ color: "grey", mt: "3rem" }}>Login</h2>
                                <div className="formBx p-4">
                                    <div className="form-outline">
                                        <p>Username</p>
                                        <input type="text" id="form3Example1" className="form-control" placeholder="Enter username"
                                            onChange={(e) => setUsername(e.target.value)} />
                                        {/* <label /> */}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <p>Password</p>
                                        <input type="password" id="form3Example4" className="form-control" placeholder="Enter password"
                                            onChange={(e) => setPassword(e.target.value)} />
                                        {/* <label /> */}
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>
                                    <div> <a
                                        style={{ textDecoration: "none", fontSize: "14px" }}
                                        href="/register"
                                    >
                                        Create new Account ?
                                    </a>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>


            </div>
        // </div> 
        // </div>
        //   </div>
        // </div>

        // <div className="col-md-1"></div> 




    );
}

export default LoginScreen;




