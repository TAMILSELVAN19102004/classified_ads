import React from "react";
import az from "../Images/Az.jpg"; // Assuming you have this image
import "../Header/MainBody.css";
import Header1 from "./Header1";
import Footer from "./Footer";

const MainBody = () => {
  return (
    <div>
    <div>
      <Header1/>
    <main>
      <div className="content-wrapper">
        <div className="welcome-message">
          <h1>Welcome to Az - Your Trusted Marketplace!</h1>
          <p>
            At Az, we believe in making buying and selling simple, secure, and enjoyable. Whether you're looking for a great deal on a used car, selling your old gadgets, or finding unique items, we've got you covered...
          </p>
          <p>
            Our platform connects buyers and sellers from all over, offering a wide range of categories to explore. With our easy-to-use interface, safe transaction process, and a community of trustworthy users, we make it easy for you to find what you need and sell what you don't.
          </p>
          <p>
            Join us today and experience the joy of hassle-free trading. Discover, connect, and enjoy the best deals at Az!
          </p>
        </div>
        <div className="image-container">
          <img src={az} alt="Logo" />
        </div>
      </div>
    </main>
    </div>
    <Footer/>
    </div>
  );
};

export default MainBody;