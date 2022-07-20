import React, { useState } from "react";

function ItemCard({ item }) {
    const { name, price, image, rented } = item;
    const [isRented, setIsRented] = useState(false);

    return (
        <div className="card">
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h2>${price}/week</h2>
            <button onClick={() => setIsRented(true)}>{isRented ? "In Cart" : "Add to Cart"}</button>
            <button>Details</button>
            <button>Delete</button>
        </div>
    )
}

export default ItemCard;