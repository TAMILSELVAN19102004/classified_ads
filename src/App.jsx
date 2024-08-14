import React from "react";
import { Route, Routes } from "react-router-dom";
import MainBody from "./Header/MainBody";
import Card1 from "./Cad/Card1";
import Bike1 from "./Bike/Bike1";
import Book1 from "./Book/Book1";
import Car1 from "./Car/Car1";
import Electronics1 from "./Electronics/Electronics1";
import Furniture1 from "./Furniture/Furniture1";
import View from "./View/View";
import Login from "./Login/Login";
import SignUp from "./Signup/SignUp";
import SideBar from "./SideBar/SideBar";
// import ProductList from "./ProductCard/ProductCard";
const App = () => {
  return (
    <>
    <View/>
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<MainBody />} />
        {/* <Route path="/products" element={<ProductList />} /> */}
        <Route path="/bike" element={<Bike1 />} />
        <Route path="/book" element={<Book1 />} />
        <Route path="/card" element={<Card1 />} />
        <Route path="/car" element={<Car1/>} />
        <Route path="/electronics" element={<Electronics1 />} />
        <Route path="/furniture" element={<Furniture1/>} />
        <Route path="/sell" element={<SideBar/>} /> 
      </Routes>

           
                
              
            
      {/* <Footer/> */}
    </>
  );
};

export default App;
