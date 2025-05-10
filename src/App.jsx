import Header from "./assets/Component/Header/Header";
import Home from "./assets/Pages/Home/Home";
import "../src/App.css";
import MenuBar from "./assets/Component/LeftTaskbar/MenuBar";
import Dashboard from "./assets/Pages/LastTransaction/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { ExpanseImage } from "./Data/IncExpdata";
import { useState,useContext } from "react";
import { Datacontext } from "./Data/Context";

function App() {

  

  return (
    <>
   
      <Router>
        <div className="WHole_app_div">
          <Header />
          <div className="MenuBar_othercompContDiv">
            <div className="Left_MenuBar_section_IN_home">
              <MenuBar />
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="Right_section_pages">
                    <Home  />
                  </div>
                }
              />
              <Route
                path="/Lasttransaction"
                element={
                  <div className="Dashboard_APp_section">
                    <Dashboard />
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
        
      </Router>
   
    </>
  );
}
export default App;
