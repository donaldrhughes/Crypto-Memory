import React from "react";
import "./style.css";

function Header(props) {
  return (
   
<div className="header">Crypto Memory<div className="message"></div>{props.children}</div>
  
  )
}

export default Header;
