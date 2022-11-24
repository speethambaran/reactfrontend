import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Dashboard from './components/Dashboard';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { useNavigate } from "react-router-dom";
import Chart from "./components/Chart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let logginStatus = JSON.parse(localStorage.getItem("loginStatus"));
    console.log("LOGIN STATUS : ", logginStatus);
    if (logginStatus && logginStatus.loggedIn == true) {
      navigate("/");
      console.log("logged");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" exact={true} element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/chart" element={<Chart />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
