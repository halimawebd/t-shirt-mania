import React from 'react';
import './Tshirts.css';

const Tshirts = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
           <img src={picture}></img>  
           <h2>{name}</h2>
           <h4>Price: {price}</h4>
           <button onClick={() => handleAddToCart(tshirt)}>Buy this</button>
        </div>
    );
};

export default Tshirts;