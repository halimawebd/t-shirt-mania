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
    const exists = cart.find(ts => ts._id === tshirt._id);
    if(exists){
        alert('t-shirt already added');
    }
    else{
        const newCart = [...cart, tshirt];
        setCart(newCart);
        // alert('successfully added')
    }
     
    }

    const handleRemoveItem = tshirt => {
        // console.log(tshirt);
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
        <div className="t-shirt-container">
        {
            tshirts.map(tshirt => <Tshirts
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            ></Tshirts>)
          }
            </div> 
            <div className='cart-container'>
                <Cart cart={cart}
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;