import React from "react";
import "./style.css";

function Jumbo(props) {
  return (
  <div className="jumbotron jumbo">Click on an image to earn points, but don't click on any more than once!{props.children}</div>
  
  )
}

export default Jumbo;
