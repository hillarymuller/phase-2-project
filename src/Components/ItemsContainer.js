import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import NewItemForm from "./NewItemForm";
import { Route } from "react-router-dom";
import Filter from "./Filter";
import Search from "./Search";

function ItemsContainer({ bagView }) {
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState("id");
    const [bag, setBag] = useState([]);
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");


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

    function onAddToBag(item) {
        console.log(item);
        if (!bag.find(listing => listing.name === item.name)) {
            setBag(currentBag => [...currentBag, item])
            alert(`${item.name} was successfully added to your bag!`)
        }}

    const onCategoryClick = (currentCategory) => {
        setCategory(currentCategory);
      }

    function onAddNew(newItem) {
        setItems([...items, newItem])
    }

    const onSearch = (currentSearch) => {
        setSearch(currentSearch);
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
    .filter(item => item.category.toLowerCase() === category || category === "all")
    .map(item => (<ItemCard item={item} key={item.id} onDeleteItem={onDeleteItem} onAddToBag={onAddToBag} />));
   
    const bagCards = bag.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) 
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
    .filter(item => item.category.toLowerCase() === category || category === "all")
    .map(item => (<ItemCard item={item} key={item.id} />));

    

    return (
        <div>
            <Route exact path="/items/new">
            <NewItemForm onFormSubmit={onAddNew} />
            </Route>
            <br></br>
            <Search onSearch={onSearch} />
            <br></br>
            <Filter onCategoryClick={onCategoryClick} />
            <br></br>
            <button className="button" onClick={() => setSortBy('location')}>Sort by Location</button>
            <button className="button" onClick={() => setSortBy('price')}>Sort by Price</button>
            <button className="button" onClick={() => setSortBy('id')}>Sort by Default</button>
            <ul className="cards">{!!bagView ? bagCards : itemCards}</ul>
        </div>
    );
}

export default ItemsContainer;