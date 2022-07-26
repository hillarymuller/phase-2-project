import React, { useState } from "react";


function ItemCard({ item, onDeleteItem, onAddToBag }) {
    const { name, price, image, location, id, category, details, rented } = item;
    const [isRented, setIsRented] = useState(rented);

    function handleDelete() {
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(() => onDeleteItem(id))
    }

    function handleAddToBag() {
        setIsRented(isRented => !isRented);
        fetch(`http://localhost:3000/items/${item.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rented: true,
            }),
        })
        .then(r => r.json())
        .then(updatedItem => onAddToBag(updatedItem));
        
    }

    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <span>${price}/week</span>
            <br></br><br></br>
            <span>{details}</span>
            <br></br><br></br>
            <span>Location: {location}</span>
            <br></br>
            <span>Category: {category}</span>
            <br></br>
            <button>♡</button>
            <button onClick={(e) => handleAddToBag(e)}>{isRented ? "In Bag" : "Add to Bag"}</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ItemCard;