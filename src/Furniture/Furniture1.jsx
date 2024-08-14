import React, { useEffect, useState } from 'react';
import Furniture from './Furniture';
import './Furniture1.css'
import Header1 from '../Header/Header1';
import Footer from '../Header/Footer';
import axios from 'axios';
function Furniture1() {
    const [items,setItems]=useState([{}]);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response=await axios.get("http://localhost:5000/data/add");
                const item = response.data.filter(product => product.category === "Furniture");
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
            <div className="App4">
                <h1>FURNITURES</h1>
                <div className="card-list4">
                    {items.map((item, index) => (
                        <Furniture key={index} items={item} />
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Furniture1