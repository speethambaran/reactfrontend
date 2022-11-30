import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
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

function App() {
  const [theme, colorMode] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let logginStatus = JSON.parse(localStorage.getItem("loginStatus"));
    console.log("LOGIN STATUS : ", logginStatus);
    if (logginStatus && logginStatus.loggedIn == true) {
      navigate("/dashboard");
      console.log("logged");
    }else {
      navigate('/')
    }
  }, []);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
          <Topbar />
          <Routes>
            {/* <Route path="/" exact={true}  element={<Dashboard/>}/> */}
            <Route path="/"   element={<Dashboard/>}/>
            <Route path='/login'  element={<LoginScreen/>} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/line" element={<Line/>}/>
            <Route path="/map" element={<AddressMap/>}/>
             </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


           
            
         