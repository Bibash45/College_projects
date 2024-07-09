import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes,Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/LIst/List";
import Order from "./pages/Orders/Order.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          {/* <Route path="/order" element={<Order />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
