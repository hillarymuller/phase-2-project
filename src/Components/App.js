import React, { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";
import { Switch, Route } from "react-router-dom";


import Home from "./Home";
import "../App.css"



function App() {
  



  return (
    <div className="App">
    <Header />
    <Switch>
      <Route path="/items">
        <ItemsContainer bagView={false} />
      </Route>
      <Route path="/bag">
        <ItemsContainer bagView={true} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <h2>404 Not Found</h2>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
