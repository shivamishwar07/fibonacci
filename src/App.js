import React from 'react';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Components/Login';
import Fibonacci from './Components/Fibonacci';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Login/>} path={"/"} />
          <Route element={<Fibonacci/>} path={"/fibonacci"} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
