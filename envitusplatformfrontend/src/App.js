<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Chart from './components/Chart';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./screens/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
          <Topbar />
          <Routes>
           
           <Route path="/" element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/chart' element={<Chart />} />

            
            </Routes>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </BrowserRouter>
=======
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
      navigate("/dashboard");
      console.log("logged");
    }
  }, []);
  return (
    <div>
      {/* <header>
        <Header />
      </header> */}
      <main>
        <Routes>
          <Route path="/dashboard" element={<HomeScreen />} />
          <Route path="/" exact={true} element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/chart" element={<Chart />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </main>
    </div>
>>>>>>> 6d3322cb5e01d9b13b21ede72ec2c6296b9eafc0
  );
}

export default App;
<<<<<<< HEAD


// function App() {
//   return (
//     <BrowserRouter>

//     {/* <header>
//       <Header />
//     </header> */}
//       <main>
//         <Routes>
//           <Route path="/" element={<HomeScreen />} />
//           <Route path='/login' element={<LoginScreen/>} />
//           <Route path='/register' element={<RegisterScreen />} />
//           <Route path='/chart' element={<Chart />} />
//           {/* <Route path="users/*" element={<Users />} /> */}
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App

=======
>>>>>>> 6d3322cb5e01d9b13b21ede72ec2c6296b9eafc0
