import React,{useEffect,useState} from 'react';
import Bike from './Bike';
import './Bike1.css';
import Header1 from '../Header/Header1';
import Footer from '../Header/Footer';
import axios from 'axios';
function Bike1() {
    const [items,setItems]=useState([{}]);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response=await axios.get("http://localhost:5000/data/add");
                const item = response.data.filter(product => product.category === "Bikes");
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
                <Header1 />
                <div className="App2">
                    <h1>BIKES</h1>
                    <div className="card-list2">
                        {items.map((item, index) => (
                            <Bike key={index} items={item} />
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    );
}

export default Bike1;
