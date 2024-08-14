import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import PostCarAd from '../PostAd/PostCarAd';
import PostBikeAd from '../PostAd/PostBikeAd';
import PostMobileAd from '../PostAd/PostMobileAd'; 
import PostElectronicsAd from '../PostAd/PostElectronicsAd';
import './SideBar.css'; 
import PostFurnitureAd from '../PostAd/PostFurnitureAd';

const SideBar = ({ navigateToHome }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [backButtonClicked, setBackButtonClicked] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); 

    const categories = [
        { name: 'Cars & Bikes', icon: 'bx bxs-car', subcategories: ['Bikes & Scooters', 'Cars', ] },
        { name: 'Mobiles & Tablets', icon: 'bx bxs-mobile', subcategories: ['Mobiles', 'Tablets'] },
        { name: 'Electronics & Appliances', icon: 'bx bxs-plug', subcategories: ['Home Appliances', 'Kitchen Appliances',] },
        { name: 'Home & Lifestyle', icon: 'bx bxs-sofa', subcategories: ['Furniture', 'Home Decor', 'Gardening', 'Kitchenware'] },
        
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory(null);
        setBackButtonClicked(false);
        setSidebarOpen(false); 
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
    };

    const handleBackButtonClick = () => {
        if (!backButtonClicked) {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
            setBackButtonClicked(true);
        } else {
            navigateToHome('/');
        }
    };

    const renderForm = () => {
        if (selectedCategory === 'Cars & Bikes') {
            if (selectedSubcategory === 'Cars') {
                return <PostCarAd />;
            } else if (selectedSubcategory === 'Bikes & Scooters') {
                return <PostBikeAd />;
            } else if (selectedSubcategory === 'Commercial Vehicles') {
                return <PostBikeAd />;
            }
        } else if (selectedCategory === 'Mobiles & Tablets') {
            if (selectedSubcategory === 'Mobiles') {
                return <PostMobileAd />;
            }
        } else if (selectedCategory === 'Electronics & Appliances') {
            if (selectedSubcategory === 'Home Appliances') {
                return <PostElectronicsAd />;
            }
        }
        else if(selectedCategory==='Home & Lifestyle')
        {
            if(selectedSubcategory==='Furniture')
            {
                return <PostFurnitureAd/>
            }
        }
        return <div className="form-placeholder"><p>Select the appropriate subcategory to post your ad.</p>
        <img className='img-post' src='https://images.mid-day.com/images/images/2022/oct/EMI_d.jpg'></img>
        </div>;
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); 
    };

    return (
        <div className="sidebar-container">
            <header className="head23">
                <div className="logo23">AZ</div>
                    <button className="back-button23" onClick={handleBackButtonClick}>Back</button>
                
            </header>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <ul className="category-list">
                    {categories.map((category, index) => (
                        <li key={index} className={`category-item ${selectedCategory === category.name ? 'selected' : ''}`} onClick={() => handleCategoryClick(category.name)}>
                            <i className={category.icon}></i> {category.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main-content23">
                <h1>Post Ad</h1>
                {selectedCategory && !selectedSubcategory ? (
                    <div className="subcategory-list-container">
                        <h2>Select a subcategory</h2>
                        <ul className="subcategory-list">
                            {categories.find(category => category.name === selectedCategory).subcategories.map((subcategory, index) => (
                                <li key={index} className="subcategory-item" onClick={() => handleSubcategoryClick(subcategory)}>{subcategory}</li>
                            ))}
                        </ul>
                        <img className='img-post' src='https://images.mid-day.com/images/images/2022/oct/EMI_d.jpg'></img>
                    </div>
                ) : (
                    renderForm()
                )}
            </div>
        </div>
    );
};

export default SideBar;