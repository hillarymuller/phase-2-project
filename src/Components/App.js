import React, { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const onSearch = (currentSearch) => {
    setSearch(currentSearch);
  }

  const onCategoryClick = (currentCategory) => {
    setCategory(currentCategory);
  }

  return (
    <div>
    <Header onSearch={onSearch} onCategoryClick={onCategoryClick} />
    <ItemsContainer search={search} category={category} />
    </div>
  );
}

export default App;
