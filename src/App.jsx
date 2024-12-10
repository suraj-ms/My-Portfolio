import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <div>

      <div>
            <Navbar />
            <div className="content">
                {/* Outlet is where nested routes will be rendered */}
                <Outlet />
            </div>
            <div className="footer">Made with ❤️ by Suraj MS</div>
        </div>

    </div>

    
  );
}

export default App;
