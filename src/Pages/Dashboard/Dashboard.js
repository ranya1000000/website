import "./Dashboard.css";
import React, { useState } from "react";
import { Navbar, Sidebar } from "../../Components/index";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar />
      <Box flexGrow={1}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
