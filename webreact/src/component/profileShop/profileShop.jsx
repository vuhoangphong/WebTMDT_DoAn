import React, { Component, useState } from 'react'
import Sidebar from "./components_shop/sidebar_shop/sidebar_shop";
import Navbar from "./components_shop/navbar_shop/navbar_shop";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import index_shop from './index_Shop';
import post_sanpham from './components_shop/sanpham/sanpham';


const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
                    <Route>
                       <switch>
                            <Route path="/profileShop" exact component={index_shop}/>  
                            <Route path="/profileShop/sanpham" exact component={post_sanpham}/>  
                       </switch>
                   </Route>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;