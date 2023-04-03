import React from "react";
import {
  Box,
  IconButton,
  InputBase,
  Toolbar,
  MenuItem,
  AppBar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlineIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlineIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FlexBetween from "../Components/FlexBetween";
import { Menu as MenuIcon, Search } from "@mui/icons-material";

const Navbar = (isSidebarOpen, setIsSidebarOpen) => {
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", backgroundColor: "#21295c" }}
      >
        {/* LEFT SIDE */}
        <Box display="flex">
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="space-between" p={2}>
          <Box display="flex" backgroundColor="#ffe3a3" borderRadius="3px">
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box display="flex">
            <IconButton>
              {" "}
              <LightModeOutlineIcon />{" "}
            </IconButton>
            <IconButton>
              {" "}
              <NotificationsOutlinedIcon />{" "}
            </IconButton>
            <IconButton>
              {" "}
              <SettingsOutlineIcon />{" "}
            </IconButton>
            <IconButton>
              {" "}
              <PersonOutlinedIcon />{" "}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
