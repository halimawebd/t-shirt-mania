import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirts from '../Tshirts/Tshirts';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
        <div className="t-shirt-container">
        {
            tshirts.map(tshirt => <Tshirts
            key={tshirt.id}
            tshirt={tshirt}
            ></Tshirts>)
          }
            </div> 
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;