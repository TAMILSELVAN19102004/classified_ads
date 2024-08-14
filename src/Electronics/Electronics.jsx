import React from 'react'
import './Electronics.css'
import { useNavigate } from 'react-router-dom';
function Electronics(props) {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/view", { state: { item: props.items,path:"/electronics"} });
  };
    console.log(props.items)
    return (
        <div>
            <div className="card3" onClick={handleClick}>
                <img src={props.items.photos} alt={props.items.title} className="card-image3" />
                <div className="ad-label3">Ad</div>
                <div className="card-details3">
                    <h2 className="card-title3">{props.items.adTitle}</h2>
                    <p className="card-price3">₹{props.items.price}</p>
                    <p className="card-location3">{props.items.location}</p>
                    <p className="card-date3">{props.items.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Electronics