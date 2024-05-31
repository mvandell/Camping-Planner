import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import EquipmentPage from "./components/EquipmentPage/EquipmentPage";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token) //delete when website finished

  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<EquipmentPage />} />
      </Routes>
    </div>
  )
};

export default App;