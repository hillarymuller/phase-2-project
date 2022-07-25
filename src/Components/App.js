import React, { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";
import { Switch, Route } from "react-router-dom";
import NewItemForm from "./NewItemForm";
import ItemDetails from "./ItemDetails";
import Home from "./Home";
import "../App.css"

function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [bagView, setBagView] = useState(false);



  const onSearch = (currentSearch) => {
    setSearch(currentSearch);
  }

  const onCategoryClick = (currentCategory) => {
    setCategory(currentCategory);
  }


  return (
    <div className="App">
    <button onClick={() => setBagView(bool => !bool)}>View Diaper Bag</button>
    <Header onSearch={onSearch} onCategoryClick={onCategoryClick} />
    <Switch>
      <Route exact path="/items/new">
        <NewItemForm />
      </Route>
      <Route path="/items/:id">
        <ItemDetails />
      </Route>
      <Route exact path="/items">
        <ItemsContainer search={search} category={category} bagView={bagView} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
