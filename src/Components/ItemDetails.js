import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails({ item }){
    const { itemId } = useParams();
    console.log(item);
    
    const { name, image, price, details, location, category } = item;

    return (
       <div className="cards">
        <div className="card">
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h3>${price}/week</h3>
            <h2>{details}</h2>
            <h3>Location: {location}</h3>
            <h3>Category: {category}</h3>
        </div>
     </div> 
    )
}

export default ItemDetails;