import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/view", { state: { item: props.items,path:"/card" } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={props.items.photos} alt={props.items.title} className="card-image" />
      <div className="ad-label">Ad</div>
      <div className="card-details">
        <h2 className="card-title">{props.items.adTitle}</h2>
        <p className="card-price">₹{props.items.price}</p>
        <p className="card-location">{props.items.location}</p>
        <p className="card-date">{props.items.date}</p>
      </div>
    </div>
  );
};

export default Card;
