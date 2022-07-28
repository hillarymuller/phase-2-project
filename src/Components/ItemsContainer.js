import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import NewItemForm from "./NewItemForm";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Filter from "./Filter";
import Search from "./Search";
import ItemDetails from "./ItemDetails";

function ItemsContainer({ bagView }) {
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState("id");
    const [bag, setBag] = useState([]);
    const [category, setCategory] = useState("all");
    const [item, setItem] = useState({});
    const [search, setSearch] = useState("");


    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then(r => r.json())
        .then(data => setItems(data))
        .then(setBag(items.filter(item => item.rented)))
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

      function onFavorite(updatedItem) {
          const updatedItems = items.map(item => {
              if (item.id === updatedItem.id) {
                  return updatedItem;
              } else {
                  return item;
              }
          });
          setItems(updatedItems);
      }

      function onItemDetails(selectedItem) {
          setItem(selectedItem);
      }
 
    
   
    const filteredItems = items.filter(item => {
        if(search === "" && category === "all" ) return true
      
        if(item.name.toLowerCase().includes(search.toLowerCase()) 
            || item.details.toLowerCase().includes(search.toLowerCase())){
              if(category === item.category)return true
              
              else if(category === "all") return true
        }
      
        return false
      });

      const sortedItems = filteredItems.sort((itemA, itemB) => {
        if (sortBy === "id") {
            return itemA.id - itemB.id;
        } else if (sortBy === "price") {
            return itemA.price - itemB.price;
        } else {
            return itemA.location.localeCompare(itemB.location);
        }
    })


    const { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route exact path={`${path}/new`}>
                    <NewItemForm onFormSubmit={onAddNew} />
                </Route>
                <Route path={`${path}/:itemId`}>
                    <ItemDetails item={item} />
                </Route>
                <Route exact path={path}>
                    <br></br>
                    <Search onSearch={onSearch} />
                    <br></br>
                    <Filter onCategoryClick={onCategoryClick} />
                    <br></br>
                    <button className="button" onClick={() => setSortBy('location')}>Sort by Location</button>
                    <button className="button" onClick={() => setSortBy('price')}>Sort by Price</button>
                    <button className="button" onClick={() => setSortBy('id')}>Sort by Default</button>
                    <div className="cards">{!!bagView ? bag.map(item =>
                    (<ItemCard item={item} key={item.id} onDeleteItem={onDeleteItem} onAddToBag={onAddToBag} onFavorite={onFavorite} onItemDetails={onItemDetails} />)) : 
                    sortedItems.map(item => 
                    (<ItemCard item={item} key={item.id} onDeleteItem={onDeleteItem} onAddToBag={onAddToBag} onFavorite={onFavorite} onItemDetails={onItemDetails} />))}
                    </div>     
                </Route>
            </Switch>
         
        </div>
    );
}

export default ItemsContainer;