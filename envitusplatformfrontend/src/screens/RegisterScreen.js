import { useState } from "react";
// import FormInput from "../screens/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/AppliationConstants";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${BASE_URL}/register/`, { username, email, name, phone, password })
      .then((response) => {
        if (response.data.errorCode == 0) {
          alert("Account created successfully");
          navigate("/");
        } else {
          alert("Account already exists");
        }
      });
  };

  return (
    <div>
      
      <div className="container-fluid authentication-screen">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div
              className="container-fluid p-4"
              style={{ top: "-60px", position: "relative" }}
            >
              <form onSubmit={handleSubmit}>
                <div className="formBx p-4">
                  <h2 className="title text-center">Register Here</h2>
                  <p>Username</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <p>Email</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email...."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p>Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name...."
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Phone</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone...."
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <p>Password</p>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="****"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="mt-1">
                    <button type="submit" className="submitBtn">
                      Register
                    </button>
                  </div>
                  <a
                    style={{ textDecoration: "none", fontSize: "14px" }}
                    href="/"
                  >
                    Already have an account ?
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
};

export default Register;
