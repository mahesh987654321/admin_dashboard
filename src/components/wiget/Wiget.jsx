import React from "react";
import "./wiget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
const Wiget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Users</span>
        <span className="counter">2134234</span>
        <span className="link">See all user here</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
          <PersonOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Wiget;
