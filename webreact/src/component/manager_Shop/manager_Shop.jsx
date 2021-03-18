import React, { Component, useState } from 'react'
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import post_Products from './manager_Product/create_Products';
import index from '.';

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
                            <Route path="/shop" exact component={index}/>  
                            <Route path="/shop/create" exact component={post_Products}/>  
                       </switch>
                   </Route>
                <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
        

    );
};

export default App
