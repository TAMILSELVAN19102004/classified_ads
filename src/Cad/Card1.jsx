import React, { useEffect, useState } from 'react';
import Footer from "../Header/Footer";
import Header1 from "../Header/Header1";
import Card from "./Card";
import "./Card1.css";
import axios from "axios"
const Card1 = () => {
  const [items,setItems]=useState([{}]);
  useEffect(()=>{
      const fetchdata=async()=>{
          try{
              const response=await axios.get("http://localhost:5000/data/add");
              const item = response.data.filter(product => product.category === "Mobiles");
              setItems(item);
              console.log("---------------",item);
          }
          catch(error){
              console.log(error);
          }
      }
      fetchdata();
  },[]);

  return (
    <div>
    <div>
      <Header1/>
      <div className="App7">
        <h1>MOBILE PHONE</h1>
        <div className="card-list">
          {items.map((item, index) => (
            <Card keys={index} items={item} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Card1;