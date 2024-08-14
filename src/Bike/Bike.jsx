import React from 'react';
import './Bike.css';
import { useNavigate } from 'react-router-dom';

function Bike(props) {
    console.log(props.items);
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/view", { state: { item: props.items,path:"/bike"} });
  };
    return (
        <div>
            <div className="card2" onClick={handleClick}>
                <img src={props.items.photos} alt={props.items.title} className="card-image2" />
                <div className="ad-label2">Ad</div>
                <div className="card-details2">
                    <h2 className="card-title2">{props.items.adTitle}</h2>
                    <p className="card-price2">₹{props.items.price}</p>
                    <p className="card-location2">{props.items.location}</p>
                    <p className="card-date2">{props.items.date}</p>
                </div>
            </div>
        </div>
    );
}

export default Bike;