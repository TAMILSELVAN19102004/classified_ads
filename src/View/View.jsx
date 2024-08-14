import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import './View.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaComment, FaEnvelope, FaUser } from "react-icons/fa";

const View = () => {
    console.log("View component rendered");

    const location = useLocation();
    const { item: product, path: back } = location.state || {};

    if (!product) {
        return <div></div>;
    }

    return (
        <div className="body1">
            <div className="container">
                <main className="main-content">
                    <div className="image-slider">
                        <img
                            src={product.photos}  // Always display the first image
                            alt={product.adTitle}
                            className="product-image" 
                            
                        />
                    </div>
                    <div className="product-info-container">
                        <div className="product-details">
                            <h1>{product.adTitle}</h1>
                            <p className="price">₹ {product.price.toLocaleString()}</p>
                            <div className="product-info">
                                <p>
                                    <FaMapMarkerAlt /> Location: {product.location}
                                </p>
                                <p>
                                    <FaCalendarAlt /> Date: {product.date}
                                </p>
                                <p>
                                    <FaUser /> 1 - Owner
                                </p>
                                <p className="About">
                                    This product is available for sale. Please contact us for more details.
                                </p>
                            </div>
                            <div className="buttons">
                                <button
                                    className="contact-button primary"
                                    onClick={() => (window.location.href = "tel:+919976264676")}
                                >
                                    <FaComment /> Chat With Seller
                                </button>
                                <button
                                    className="contact-button secondary"
                                    onClick={() => (window.location.href = "mailto:sivabalan202137@gmail.com")}
                                >
                                    <FaEnvelope /> Contact Seller
                                </button>
                            </div>
                            <NavLink to={back}>
                                <button className="back-button">Back</button>
                            </NavLink>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default View;
