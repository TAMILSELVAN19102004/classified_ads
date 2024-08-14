import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "../Header/Header1.css";
// import Profile from '../Profile/Profile'; // Import the Profile component
import { NavLink, useNavigate } from "react-router-dom";


const Header1 = () => {
  
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate(); 
  const toggle = () => {
    setVisible(!Visible);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();

    if (query.includes("car")) {
      navigate("/car");
    } else if (query.includes("bike") || query.includes("motorcycle")) {
      navigate("/bike");
    } else if (query.includes("mobile")) {
      navigate("/card"); // Assuming 'card' is your mobile phone route
    } else if (query.includes("book")) {
      navigate("/book");
    } else if (query.includes("electronics")) {
      navigate("/electronics");
    } else if (query.includes("furniture")) {
      navigate("/furniture");
    } else {
      // Default to home if no match is found
      navigate("/home");
    }
  };

  return (
    <div className="body14">
    <header className="Head">
      <div className="search-bar">
        <div className="header-left">
          <div className="logo">
            <img 
              src="https://img.freepik.com/premium-vector/az-letter-logo-design-with-circle-shape-az-circle-cube-shape-logo-design-az-monogram-busine_629210-818.jpg" 
              alt="AZ Logo" 
              className="logo-img"
            />
          </div>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Find Cars, Mobile Phones and more..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
        <NavLink to="/sell"> <button className="sell-button">SELL</button></NavLink>
        
        
      </div>
      <nav className="categories">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/car">Cars</NavLink>
        <NavLink to="/bike">Motorcycles</NavLink>
        <NavLink to="/card">Mobile Phones</NavLink>
        <NavLink to="/book">Books</NavLink>
        <NavLink to="/electronics">Electronics</NavLink>
        <NavLink to="/furniture">Furnitures</NavLink>
        
      </nav>

     
    </header>
    </div>
  );
};

export default Header1;