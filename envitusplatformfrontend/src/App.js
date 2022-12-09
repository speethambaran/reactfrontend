import React, { useEffect, useState } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
// import HomeScreen from './screens/HomeScreen';
import LoginScreen from './scenes/login';
// import RegisterScreen from './screens/RegisterScreen';
// import Table from './components/Table';
// import Users from './components/Users';
// import OrganisationScreen from './screens/OrganisationScreen';
// import AddSensorScreen from './screens/AddSensorScreen';
// import EnhancedTable from './components/LiveData/LivedataTable'
// import LiveData from './components/LiveData/LiveData'

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userRole, setUserRole] = useState('')
  // const navigate = Navigate();
  // useEffect(() => {
  //   let logginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  //   let userInfo = JSON.parse(localStorage.getItem("userData"))
  //   if (userInfo) {
  //     setUserRole(userInfo.role)
  //   }
  //   if (logginStatus && logginStatus.loggedIn == true) {
  //     navigate("/dashboard");
  //   }
  // }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
          <Route path='/' exact={true}  element={<LoginScreen />} />
              {/* <Route path='/register' element={<RegisterScreen />} /> */}
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path='/device' element={<Table role={userRole} />} /> */}
                {/* <Route path='/users' element={<Users role={userRole} />} /> */}
                {/* <Route path='/organizations' element={<OrganisationScreen role={userRole} />} /> */}
                {/* <Route path='/sensors' element={<AddSensorScreen role={userRole} />} /> */}
                {/* <Route path="/livedata" element={<EnhancedTable />} /> */}
                {/* <Route path="/live" element={<LiveData />} /> */}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
