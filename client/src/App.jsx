import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Auth />}></Route>
      </Routes>
    </div>
  );
}

export default App;
