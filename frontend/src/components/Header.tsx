import React from "react";
import  AppBar  from "@mui/material/AppBar";
import  Toolbar  from "@mui/material/Toolbar";

const Header = () => {
    return (
        <AppBar sx={{ bgcolor: "black", position: "static"}}>
            <Toolbar></Toolbar>
        </AppBar>
    );
};

export default Header;
