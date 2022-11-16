import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
// import Dashboard from './components/Dashboard';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <header>
      <Header />
    </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App