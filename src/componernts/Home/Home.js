import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirts from '../Tshirts/Tshirts';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt =>{
     const newCart = [...cart, tshirt];
     setCart(newCart);
    }

    return (
        <div className='home-container'>
        <div className="t-shirt-container">
        {
            tshirts.map(tshirt => <Tshirts
            key={tshirt.id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            ></Tshirts>)
          }
            </div> 
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;