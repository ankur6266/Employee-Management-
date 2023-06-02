import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Dashboard/Dashboard';
import { Section } from './components/Dashboard/Dashboard';
import Account from './components/Account/Account';
import AddEmployee from './components/AddEmploye/AddEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Sidebar from './components/Sidebar/Sidebar';
function App() {

  return (
    <div className="App">
    
    <Router>
    <Sidebar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="addEmployee" element={<AddEmployee />} />
          <Route exact path="/employeeList" element={<EmployeeList />} />

      </Routes>
    </Router>
    {/* <Home /> */}
    {/* < Account /> */}
    {/* <AddEmployee /> */}
    </div>
  );
}

export default App;