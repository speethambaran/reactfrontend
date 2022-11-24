import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
// import Dashboard from './components/Dashboard';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Chart from './components/Chart';

function App() {
  return (
    <BrowserRouter>
    <header>
      <Header />
    </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/chart' element={<Chart />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App

