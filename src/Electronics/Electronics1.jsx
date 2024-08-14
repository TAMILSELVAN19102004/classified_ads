import React, { useEffect, useState } from 'react';
import Electronics from './Electronics';
import "./Electronics1.css"
import Header1 from '../Header/Header1';
import Footer from '../Header/Footer';
import axios from 'axios';

function Electronics1() {
    const [items,setItems]=useState([{}]);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response=await axios.get("http://localhost:5000/data/add");
                const item = response.data.filter(product => product.category === "Electronics");
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
            <div className="App3">
                <h1>ELECTRONICS AND HOME APPLIANCES</h1>
                <div className="card-list3">
                    {items.map((item, index) => (
                        <Electronics key={index} items={item} />
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Electronics1