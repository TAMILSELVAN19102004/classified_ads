import React from 'react'
import './Furniture.css'
import { useNavigate } from 'react-router-dom';
function Furniture(props) {
    console.log(props.items)
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/view", { state: { item: props.items,path:"/Furniture"} });
  };
    return (
        <div>
            <div className="card4" onClick={handleClick}>
                <img src={props.items.photos} alt={props.items.title} className="card-image4" />
                <div className="ad-label4">Ad</div>
                <div className="card-details4">
                    <h2 className="card-title4">{props.items.adTitle}</h2>
                    <p className="card-price4">₹{props.items.price}</p>
                    <p className="card-location4">{props.items.location}</p>
                    <p className="card-date4">{props.items.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Furniture