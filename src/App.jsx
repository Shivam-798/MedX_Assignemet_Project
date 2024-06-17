import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import FormA from './components/FormA.jsx';
import FormB from './components/FormB.jsx';
// import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formA" element={<FormA />} />
          <Route path="/formB" element={<FormB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
