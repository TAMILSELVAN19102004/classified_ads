import React from 'react'
import './Book.css'
import { useNavigate } from 'react-router-dom';
function Book(props) {
    console.log(props.items)
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/view", { state: { item: props.items,path:"/book"} });
  };
    return (
        <div>
            <div className="card5" onClick={handleClick}>
                <img src={props.items.photos} alt={props.items.title} className="card-image5" />
                <div className="ad-label5">Ad</div>
                <div className="card-details5">
                    <h2 className="card-title5">{props.items.adTitle}</h2>
                    <p className="card-price5">₹{props.items.price}</p>
                    <p className="card-location5">{props.items.location}</p>
                    <p className="card-date5">{props.items.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Book