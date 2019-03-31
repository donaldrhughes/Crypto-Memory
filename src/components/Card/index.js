import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="row">
    <div className="col">
    <div className="card remove" onClick={() => props.addChosenCoin(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">

            <div className="cointext">{props.name}</div> 
      
      </div>
  
    </div>
    
    </div>
    </div>

  );
}

export default Card;
