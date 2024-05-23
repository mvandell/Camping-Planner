import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token) //delete when website finished

  return (
    <div className="App">
      <Routes>

      </Routes>
    </div>
  )
};

export default App;