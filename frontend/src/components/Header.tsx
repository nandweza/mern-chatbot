import React from "react";
import  AppBar  from "@mui/material/AppBar";
import  Toolbar  from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { UserAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
    const auth = UserAuth();
    return (
        <AppBar 
            sx={{ 
                bgcolor: "transparent", 
                position: "static", 
                boxShadow: "none"
            }}
        >
            <Toolbar sx={{ display: "flex" }}>
                <Logo />
                <div>
                    {auth?.isLoggedIn ? (
                        <>
                            <NavigationLink
                                bg="#00fffc" 
                                to="/chat"
                                text="Go to Chats"
                                textColor="black"
                            />
                            <NavigationLink 
                                bg="#51538f"
                                to="/"
                                textColor="white"
                                text="logout"
                                onClick={auth.logout}
                            />
                        </>
                    ) : (
                        <>
                            <NavigationLink
                                bg="#00fffc" 
                                to="/login"
                                text="Login"
                                textColor="black"
                            />
                            <NavigationLink 
                                bg="#51538f"
                                to="/signup"
                                textColor="white"
                                text="Signup"
                            />
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
