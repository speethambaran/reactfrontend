import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Topbar from "../../screens/global/Topbar"
import Sidebar from "../../screens/global/Sidebar";
const Layout = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [isSidebarOpen,setIsSidebarOpen] = useState (true)
    return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
  <Sidebar  
  isNonMobile={isNonMobile}
  drawerwidth ="250px"
  isSidebarOpen={isSidebarOpen}
  setIsSidebarOpen={setIsSidebarOpen}
  />
        <Box>
        <Topbar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}        
        />
            <Outlet />
        </Box>
    </Box>
    )
}

export default Layout;