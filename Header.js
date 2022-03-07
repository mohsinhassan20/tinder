import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        className="header_logo"
        src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Icon-300x300.png"
        alt=""
      />
    </div>
  );
}

export default Header;
