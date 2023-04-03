import { Typography, Box } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        color="#fff6e0"
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="#ffe3a3">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
