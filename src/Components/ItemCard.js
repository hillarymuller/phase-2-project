import React, { useState } from "react";
import { Link } from "react-router-dom";




function ItemCard({ item, onDeleteItem, onAddToBag, onFavorite, onItemDetails }) {
    const { name, price, image, location, id, category, rented, isFavorite } = item;
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

    function handleFavorite() {
        fetch(`http://localhost:3000/items/${item.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isFavorite: !isFavorite,
            }),
        })
        .then(r => r.json())
        .then(updatedItem => onFavorite(updatedItem))
    }

    function handleDetails() {
        onItemDetails(id)
    }

    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <span>${price}/week</span>
            <br></br><br></br>
            <span>Location: {location}</span>
            <br></br>
            <span>Category: {category}</span>
            <br></br>
            <br></br>
            <Link to={`/items/${id}`}>
                <button className="card-button" onClick={handleDetails}>Details</button>
            </Link>
            <br></br>
            <button className="card-button" onClick={handleFavorite}>{isFavorite ? "♥" : "♡"}</button>
            <button className="card-button" onClick={(e) => handleAddToBag(e)}>{isRented ? "In Bag" : "Add to Bag"}</button>
            <button className="card-button" onClick={handleDelete}>Delete</button>
            </div>
    )
}

export default ItemCard;