import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./screens/global/Topbar";
import Dashboard from "./screens/Dashboard/index";
import Sidebar from "./screens/global/Sidebar";
import Bar from "./screens/bar";
import Line from "./screens/line"
import AddressMap from "./components/Map"
import Table from './components/Table';
import Users from './components/Users';
import OrganisationScreen from './screens/OrganisationScreen';
import AddSensorScreen from './screens/AddSensorScreen';
import LivedataScreen from './screens/LivedataScreen'
import ProfileScreen from './screens/ProfileScreen';
// import EnhancedTable from './components/LivedataTable'
// import LiveData from   './components/LiveData'
import DeviceList from './components/DeviceList';
import TableBKP from './components/TableBKP'
import EnhancedTable from './components/LiveData/LivedataTable'
import LiveData from   './components/LiveData/LiveData'
import ApikeyGenerateKey from './screens/ApikeyGenerateKey';

function App() {
  const [theme, colorMode] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    let logginStatus = JSON.parse(localStorage.getItem("loginStatus"));
    let userInfo = JSON.parse(localStorage.getItem("userData"))
    
    if (logginStatus && logginStatus.loggedIn == true && userInfo) {
      setUserRole(userInfo.role)
      navigate("/dashboard");
    }else{
      navigate('/')
    }
  }, []);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar role={userRole}/>
          <main className="content">
          <Topbar />
          <Routes>
            {/* <Route path="/dashboard" element={<HomeScreen />} /> */}
            <Route path="/dashboard" exact={true}  element={<Dashboard/>}/>
            <Route path='/' exact={true} element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/device' element={<DeviceList role={userRole} />} />
            <Route path='/users' element={<Users role={userRole} />} />
            <Route path='/organizations' element={<OrganisationScreen role={userRole} />} />
            <Route path='/sensors' element={<AddSensorScreen role={userRole} />} />
            {/* <Route path='/livedata' element={<LivedataScreen role={userRole} />} /> */}
            <Route path='/profile' element={<ProfileScreen />} />
            {/* <Route path="/livedata" element={<EnhancedTable/>}/>  */}
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/line" element={<Line/>}/>
            <Route path="/map" element={<AddressMap/>}/>
            <Route path="/livedata" element={<LiveData role={userRole} />}/>
            <Route path='/api_key' element={<ApikeyGenerateKey/>}/>
            
             </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
