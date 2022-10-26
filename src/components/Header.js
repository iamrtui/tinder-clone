import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";

import "./Header.css";

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            { backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large"/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}
            
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
                    alt="tinder-logo"
                /> 
            </Link>


            <Link to="/chat">
                <IconButton>
                    <MessageIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>


        </div>
    )
}

export default Header;