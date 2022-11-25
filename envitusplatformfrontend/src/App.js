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
  );
}

export default App;


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

