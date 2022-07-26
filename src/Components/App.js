import React, { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";
import { Switch, Route } from "react-router-dom";
import NewItemForm from "./NewItemForm";
import ItemDetails from "./ItemDetails";
import Home from "./Home";
import "../App.css"

function App() {
  const [bagView, setBagView] = useState(false);

  return (
    <div className="App">
    <Header />
    <Switch>
      <Route path="/items/new">
      <NewItemForm />
      </Route>
      <Route path="/items/:id">
        <ItemDetails />
      </Route>
      <Route exact path="/items">
        <ItemsContainer bagView={bagView} />
      </Route>
      <Route exact path="/bag">
        <ItemsContainer bagView={!bagView} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
