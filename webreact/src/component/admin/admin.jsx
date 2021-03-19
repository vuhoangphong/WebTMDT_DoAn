import { useState } from "react";
import './admin.css'
import "../../App.css";


import Navbar from "./components_Admin/navbar/Navbar";
import Sidebar from "./components_Admin/sidebar/Sidebar";
import { Route } from "react-router";
import category from "./category_Admin/category";
import Dashboard from "./dashboard_Admin/dashboard";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container-fuild">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Route>
        <switch>
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/admin/category" exact component={category} />
        </switch>
      </Route>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;