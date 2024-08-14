import React, { useEffect, useState } from 'react';
import Book from './Book';
import './Book1.css'
import Header1 from '../Header/Header1';
import Footer from '../Header/Footer';
import axios from 'axios';
function Book1() {
    
    const [items,setItems]=useState([{}]);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response=await axios.get("http://localhost:5000/data/add");
                const item = response.data.filter(product => product.category === "Books");
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
            <div className="App5">
                <h1>BOOKS</h1>
                <div className="card-list5">
                    {items.map((item, index) => (
                        <Book key={index} items={item} />
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Book1