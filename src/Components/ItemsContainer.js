import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemsContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then(r => r.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
    }, []);
    
    const itemCards = items.map(item => (<ItemCard item={item} key={item.id} />));

    return (
        <div>
            <h1>item container</h1>
            {itemCards}
        </div>
    );
}

export default ItemsContainer;