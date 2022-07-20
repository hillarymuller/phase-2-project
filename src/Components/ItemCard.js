import React, { useState } from "react";

function ItemCard({ item }) {
    const { name, price, image, location } = item;
    const [isRented, setIsRented] = useState(false);

    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <span>${price}/week</span>
            <span>Location: {location}</span>
            <button onClick={() => setIsRented(true)}>{isRented ? "In Cart" : "Add to Cart"}</button>
            <button>Details</button>
            <button>Delete</button>
        </div>
    )
}

export default ItemCard;