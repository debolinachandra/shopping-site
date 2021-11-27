import React from 'react';
import BackImg from '../images/back.jfif';
import Products from './AddProducts';
import './Home.css';
const Home = () => {
    return (
        <>
            <div className="home" style={{ backgroundImage: `url(${BackImg})` }}>

                <div className="banner">
                    <h1>Welcome to our store</h1>
                </div>
                <div>
                    <button>Add Product</button>
                </div>
            </div>
        <Products/>
        </>
    )
}

export default Home
