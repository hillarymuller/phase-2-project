import React, { useState } from "react";

function Search({ onSearch }) {
    const [currentSearch, setCurrentSearch] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(currentSearch);
    setCurrentSearch("");    
}
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Search"
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
            />
            <button type="submit">Search!</button>
        </form>
    )
}

export default Search;