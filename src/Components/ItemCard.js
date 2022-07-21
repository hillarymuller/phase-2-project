import React, { useState } from "react";

function ItemCard({ item, onDeleteItem, onAddToCart }) {
    const { name, price, image, location, id, category } = item;
    const [isRented, setIsRented] = useState(false);

    function handleDelete() {
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(() => onDeleteItem(id))
    }

    function handleAddToCart(e) {
        e.preventDefault();
        setIsRented(true);
        onAddToCart(item);
    }

    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <span>${price}/week</span>
            <br></br>
            <span>Location: {location}</span>
            <br></br>
            <span>Category: {category}</span>
            <br></br>
            <button onClick={(e) => handleAddToCart(e)}>{isRented ? "In Cart" : "Add to Cart"}</button>
            <button>Details</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ItemCard;