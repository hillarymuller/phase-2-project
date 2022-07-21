import React, { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cartView, setCartView] = useState(false);

  const onSearch = (currentSearch) => {
    setSearch(currentSearch);
  }

  const onCategoryClick = (currentCategory) => {
    setCategory(currentCategory);
  }

  return (
    <div>
      <button onClick={() => setCartView(bool => !bool)}>View Cart</button>
    <Header onSearch={onSearch} onCategoryClick={onCategoryClick} />
    <ItemsContainer search={search} category={category} cartView={cartView} />
    </div>
  );
}

export default App;
