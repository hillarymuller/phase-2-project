import React from "react";

function ItemCard({ item }) {
    const { name, price, image } = item;

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h2>{price}</h2>
        </div>
    )
}

export default ItemCard;