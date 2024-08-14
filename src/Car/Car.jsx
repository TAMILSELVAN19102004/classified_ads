import React from 'react';
import './Car.css';
import Car1 from './Car1';
import { useNavigate } from 'react-router-dom';

const Car = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/view", { state: { item: props.items,path:"/car"} });
  };
  return (
    <div className="card1" onClick={handleClick}>
      <img src={props.items.photos} alt={props.items.title} className="card-image1" />
      <div className="ad-label1">Ad</div>
      <div className="card-details1">
        <h2 className="card-title1">{props.items.adTitle}</h2>
      
        <p className="card-price1">₹{props.items.price}</p>
        <p className="card-date1">{props.items.date}</p>
     
      </div>
    </div>
  );
};

export default Car;