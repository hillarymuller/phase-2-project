import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemsContainer({ search }) {
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState("id");

    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then(r => r.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
    }, []);
    
    function onDeleteItem(id) {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    }

    const itemCards = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) 
    || item.details.toLowerCase().includes(search.toLowerCase()))
    .sort((itemA, itemB) => {
        if (sortBy === "id") {
            return itemA.id - itemB.id;
        } else if (sortBy === "price") {
            return itemA.price - itemB.price;
        } else {
            return itemA.location.localeCompare(itemB.location);
        }
    })
    .map(item => (<ItemCard item={item} key={item.id} onDeleteItem={onDeleteItem} />));

    return (
        <div>
            <button>Add New Item</button>
            <button onClick={() => setSortBy('location')}>Sort by Location</button>
            <button onClick={() => setSortBy('price')}>Sort by Price</button>
            <button onClick={() => setSortBy('id')}>Sort by Default</button>
            <ul className="cards">{itemCards}</ul>
        </div>
    );
}

export default ItemsContainer;