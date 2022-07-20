import React, { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";

function App() {
  const [search, setSearch] = useState("");

  const onSearch = (currentSearch) => {
    setSearch(currentSearch);
  }

  return (
    <div>
      <h1>Working</h1>
    <Header onSearch={onSearch} />
    <ItemsContainer search={search} />
    </div>
  );
}

export default App;
