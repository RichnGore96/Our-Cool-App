import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Login from "./Components/Auth/login/Login";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
