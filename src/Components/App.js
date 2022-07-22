import React, { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";

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
    <div>
      <button onClick={() => setBagView(bool => !bool)}>View Diaper Bag</button>
    <Header onSearch={onSearch} onCategoryClick={onCategoryClick} />
    <ItemsContainer search={search} category={category} bagView={bagView} />
    </div>
  );
}

export default App;
