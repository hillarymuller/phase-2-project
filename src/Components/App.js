import React, { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import "../App.css"



function App() {
  const [bagView, setBagView] = useState(false);

  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path="/items">
        <ItemsContainer bagView={bagView} />
      </Route>
      <Route exact path="/bag">
        <ItemsContainer bagView={!bagView} />
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
