import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
