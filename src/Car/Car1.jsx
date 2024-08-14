import React, { useEffect, useState } from 'react';
import Car from './Car';
import './Car1.css';
import Header1 from '../Header/Header1';
import Footer from '../Header/Footer';
import axios from 'axios';
const Car1 = () => {
    const [items,setItems]=useState([{}]);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response=await axios.get("http://localhost:5000/data/add");
                const item = response.data.filter(product => product.category === "Cars");
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
            <div className="App1">
                <h1>CARS</h1>
                <div className="card-list1">
                    {items.map((item, index) => (
                        <Car key={index} items={item} />
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Car1;
