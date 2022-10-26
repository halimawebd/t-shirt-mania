import React from 'react';

const Tshirts = ({tshirt}) => {
    const {picture, name} = tshirt;
    return (
        <div>
           <img src={picture}></img>  
        </div>
    );
};

export default Tshirts;