import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import Topbar from "./screens/global/Topbar";
import Dashboard from "./screens/Dashboard/index";
// import Sidebar from "./screens/global/Sidebar";
import Bar from "./screens/bar";
import Line from "./screens/line"
import AddressMap from "./components/Map"
import Table from './components/Table';
import Users from './components/Users';
import OrganisationScreen from './screens/OrganisationScreen';
import AddSensorScreen from './screens/AddSensorScreen';
import EnhancedTable from './components/LiveData/LivedataTable'
import LiveData from './components/LiveData/LiveData'
import Layout from './screens/Layout';

function App() {
  const [theme, colorMode] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    let logginStatus = JSON.parse(localStorage.getItem("loginStatus"));
    let userInfo = JSON.parse(localStorage.getItem("userData"))
    if (userInfo) {
      setUserRole(userInfo.role)
    }
    if (logginStatus && logginStatus.loggedIn == true) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="app">
      
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

           
            <Routes>
              <Route path='/' exact={true} element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route element={<Layout />}>
                {/* <Route path='/' element={<Navigate to="/dashboard" replace />} /> */}
                <Route path="/dashboard"  element={<Dashboard />} />
                <Route path='/device' element={<Table role={userRole} />} />
                <Route path='/users' element={<Users role={userRole} />} />
                <Route path='/organizations' element={<OrganisationScreen role={userRole} />} />
                <Route path='/sensors' element={<AddSensorScreen role={userRole} />} />
                <Route path="/livedata" element={<EnhancedTable />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/line" element={<Line />} />
                <Route path="/map" element={<AddressMap />} />
                <Route path="/live" element={<LiveData />} />
              </Route>

            </Routes>
           

          </ThemeProvider>
        </ColorModeContext.Provider>
     
    </div>
  );
}

export default App;

